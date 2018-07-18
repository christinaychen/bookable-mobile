import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';


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

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone, public navCtrl: NavController, public navParams: NavParams
  ) {}


  ionViewDidLoad() {
  }


 
ngOnInit() {
  this.getDirection()
}


 
getDirection() {
  navigator.geolocation.getCurrentPosition((position) => {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.zoom = 12;
    this.latitudeDestination = -33;
    this.longitudeDestination = 18;
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
 


