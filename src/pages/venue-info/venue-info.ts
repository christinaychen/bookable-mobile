import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { MapPage } from '../map/map';


/**
 * Generated class for the VenueInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venue-info',
  templateUrl: 'venue-info.html',
})
export class VenueInfoPage implements OnInit{

  @ViewChild('map') mapElement: ElementRef;


  public latitude: number = 33;
  public longitude: number = 18;

  public latitudeDestination: number = -33;
  public longitudeDestination: number = 18;

  public searchControl: FormControl;
  public zoom: number;
  public lat: Number = 33.9173
  public lng: Number = 18.4039
 
  public origin: {}
  public destination: {}

  public address: string;
  public rating: number;
  public price: string;
  public categories: String[];

  public ratingArray: number[]=[];
  public ratingHalfArray: number[]=[];
  public ratingNone: number[] = [];
  public business: any;


  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, public navCtrl: NavController, public navParams: NavParams
  ) {
    this.address = this.navParams.get("address");
    this.rating = this.navParams.get("rating");

    for (let i =0; i<this.rating; i++) {
      this.ratingArray.push(1);
    }

    if (this.rating!=Math.trunc(this.rating)) {
      this.ratingHalfArray.push(1)
    }

    for (let i = 0; i<5-this.rating; i++) {
      this.ratingNone.push(1);
    }
    this.business = this.navParams.get("business");


    this.price = this.navParams.get("price");
    this.categories = this.navParams.get("categories").title;
    this.latitudeDestination = this.navParams.get("coordinates").latitude;
    this.longitudeDestination = this.navParams.get("coordinates").longitude;
  }

  goToMap() {
    this.navCtrl.push(MapPage,
    {
      business: this.business,
    });
  }


  ionViewDidLoad() {
  }


 
ngOnInit() {
  this.getDirection()
}


 
getDirection() {
  navigator.geolocation.getCurrentPosition((position) => {
    // this.latitude = position.coords.latitude;
    // this.longitude = position.coords.longitude;
    this.latitude = 36.0014;
    this.longitude = -78.9382;
    this.zoom = 12;

    // this.calculateDistance();

    this.origin = { lat: this.latitude, lng: this.longitude }
    this.destination = { lat: this.latitudeDestination, lng: this.longitudeDestination }
  });
}





// calculateDistance() {
//   const orig = new google.maps.LatLng(this.latitude,this.longitude);
//   const dest = new google.maps.LatLng(this.latitudeDestination, this.longitudeDestination);
//   const distance = google.maps.geometry.spherical.computeDistanceBetween(orig, dest);
//   console.log(distance)
// }


  // ngOnInit() {
  //   //set google maps defaults
  //   this.zoom = 4;
  //   this.latitude = 39.8282;
  //   this.longitude = -98.5795;

  //   //create search FormControl
  //   this.searchControl = new FormControl();

  //   //set current position
  //   this.setCurrentPosition();

  //   //load Places Autocomplete
  //   this.mapsAPILoader.load().then(() => {
  //     let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  //       types: ["address"]
  //     });
  //     autocomplete.addListener("place_changed", () => {
  //       this.ngZone.run(() => {
  //         //get the place result
  //         let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  //         //verify result
  //         if (place.geometry === undefined || place.geometry === null) {
  //           return;
  //         }

  //         //set latitude, longitude and zoom
  //         this.latitude = place.geometry.location.lat();
  //         this.longitude = place.geometry.location.lng();
  //         this.zoom = 12;
  //       });
  //     });
  //   });
  // }

  // private setCurrentPosition() {
  //   if ("geolocation" in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude;
  //       this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }
}
 


