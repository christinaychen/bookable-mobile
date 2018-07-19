import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';
import { PaymentPage } from '../payment/payment';
import { VenueInfoPage } from '../venue-info/venue-info'
import { Geolocation ,GeolocationOptions ,Geoposition } from '@ionic-native/geolocation'; 
import { Http, Headers } from '@angular/http';
import { Business } from '../../models/business';



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  options: GeolocationOptions;
  currentPos: Geoposition;
  places: Array<any>
  @ViewChild(Slides) slides: Slides;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  // @ViewChild('myTabs') tabRef: Tabs;

  public venues:Array<Venue>;
  private name: string;
  public latitude: number = 36.0014;
  public longitude: number = -78.9382;
  public radius: number=16093;
  public prox: string;

  public currentLatitude: number;
  public currentLongitude: number;

  
  public zoom: number;

  public businesses;
  public closebusinesses: Business[]=[];

  public titles=[];

  public cusname: string;



  



  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams, venueService:VenueService, private geolocation: Geolocation, ) {
    // this.venues = venueService.getAllVenues();
    // this.name = this.navParams.get("nameParameter");
    // console.log(this.navParams.get("nameParameter") + "Hello");
    this.getName();
    this.prox = this.latitude + "%2C" + this.longitude + "%2C500";
    this.getBusinesses;
  }

  goToVenueInfo(business) {
    this.navCtrl.push(VenueInfoPage, {
      address: business.location.address1 + ", " + business.location.city + ", " + business.location.state + " " + business.location.zip_code,
      rating: business.rating,
      price: business.price,
      categories: business.categories,
      coordinates: business.coordinates
      
    })

  }

  getName() {
    this.http
    .get(`http://localhost:3000/customer?jwt=${localStorage.getItem("TOKEN")}`)
    .subscribe(
      result => {
        this.cusname = result.json().name;
      }
    );
  }

  ionViewDidLoad() {
    // let headers = new Headers();
    // headers.append('Authorization', 'Bearer Nk8nZhueM7f1BxKDu4mr5i6N0ip8X1ZUXf7bLDLhOs4yjLNpDZSvWn50N_dGVcMPoyhZMJ7qUvIhj7p4pPru0wOSvaJf9B-eVulW_V-3vfXH-BPvfdQdR_8cIg1PW3Yx');
    // this.http
    // .get(`https://api.yelp.com/v3/businesses/search?latitude=${this.latitude}&longitude=${this.longitude}&radius=${this.radius}`, {
    //   headers
    // })
    // .subscribe(
    //   result => {
    //     console.log(result);

    //   },

    //   err => {
    //     console.log(err);
    //   }
    // );

  }

  getBusinesses() {
    this.http
    .get(`http://localhost:3000/businesses?latitude=${this.latitude}&longitude=${this.longitude}&radius=${this.radius}`, {
      })
      .subscribe(
        result => {
          let tempVar = result.json().body;
          console.log(tempVar);
          this.businesses = tempVar.businesses;

          

          for (let business of this.businesses) {

            let businesslat = business.coordinates.latitude;
            let businesslong = business.coordinates.longitude;
            let lat = parseFloat(businesslat) - this.currentLatitude;
            let long = parseFloat(businesslong) - this.currentLongitude;

            let distance = Math.pow(lat, 2) + Math.pow(long,2);

            if (distance<=Math.pow(16093,2)) {
              this.closebusinesses.push(business);
            }
          }

          for (let business of this.closebusinesses) {
            for (let item of business.categories) {
              this.titles.push(item.title);
            }
          }
        },
        err => {
          console.log(err);
        }
      );
  }

  ionViewCanEnter(){
    this.getUserPosition();
    // setTimeout(()=>{
    //   this.getBusinesses();
      
    // },10000)


    // this.http
    // .get(`http://localhost:3000/currentLocation?prox=${this.prox}&mode=retrieveAddresses&maxresults=1&gen=8&app_id=DemoAppId01082013GAL&app_code=AJKnXv84fjrb0KIHawS0Tg`, {
    //   })
    //   .subscribe(
    //     result => {
    //       console.log(result);
    //     },
    //     err => {
    //       console.log(err);
    //     }
    //   );

}    

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==3)
      this.slides.stopAutoplay();
  }


  goToLogin(){
    this.navCtrl.push(LoginPage);
  }



  // private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.currentLatitude = position.coords.latitude;
  //       this.currentLongitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }




// addMarker(){

//   let marker = new google.maps.Marker({
//   map: this.map,
//   animation: google.maps.Animation.DROP,
//   position: this.map.getCenter()
//   });

//   let content = "<p>This is your current position !</p>";          
//   let infoWindow = new google.maps.InfoWindow({
//   content: content
//   });

//   google.maps.event.addListener(marker, 'click', () => {
//   infoWindow.open(this.map, marker);
//   });

// }

  getUserPosition(){
    this.options = {
        enableHighAccuracy : true
    };

    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
        this.currentPos = pos;      
        this.currentLatitude=pos.coords.latitude;
        this.currentLongitude=pos.coords.longitude;
        this.getBusinesses();

    },(err : PositionError)=>{
        console.log("error : " + err.message);
    });
}
//   getRestaurants(latLng)
// {
//     var service = new google.maps.places.PlacesService(this.map);
//     let request = {
//         location : latLng,
//         radius : 8047 ,
//         types: ["restaurant"]
//     };
//     return new Promise((resolve,reject)=>{
//         service.nearbySearch(request,function(results,status){
//             if(status === google.maps.places.PlacesServiceStatus.OK)
//             {
//                 resolve(results);    
//             }else
//             {
//                 reject(status);
//             }

//         }); 
//     });
// }

// // showNearbyResto() {
// //   let latLng = new google.maps.LatLng(this.latitude, this.longitude);
// //   this.getRestaurants(latLng)
// // }

// createMarker(place)
// {
//     let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: place.geometry.location
//     });   
// }   
// addMap(lat,long){

//   let latLng = new google.maps.LatLng(lat, long);

//   let mapOptions = {
//   center: latLng,
//   zoom: 15,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
//   }

//   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

//   this.getRestaurants(latLng).then((results : Array<any>)=>{
//       this.places = results;
//       for(let i = 0 ;i < results.length ; i++)
//       {
//           this.createMarker(results[i]);
//       }
//   },(status)=>console.log(status));

//   this.addMarker();

// }



}
