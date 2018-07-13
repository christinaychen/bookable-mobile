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
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 
import { googlemaps } from 'googlemaps';

// let service = new google.maps.places.PlacesService(this.map);


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

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
  public latitude: number;
  public longitude: number;


  
  public zoom: number;
  



  constructor(public navCtrl: NavController, public navParams: NavParams, venueService:VenueService, private geolocation: Geolocation, ) {
    // this.venues = venueService.getAllVenues();
    this.name = this.navParams.get("nameParameter");
    console.log(this.navParams.get("nameParameter") + "Hello");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
//   ionViewDidEnter(){
//     this.getUserPosition();
// }    

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



  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
        
        
      });
    }
  }


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

//   getUserPosition(){
//     this.options = {
//         enableHighAccuracy : true
//     };

//     this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {

//         this.currentPos = pos;      
//         console.log(pos);

//     },(err : PositionError)=>{
//         console.log("error : " + err.message);
//     });
// }
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
