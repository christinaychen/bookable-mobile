import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { VenuesPage } from '../venues/venues';
import { Http } from '@angular/http';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  public venues:Array<Venue>;
  shouldHideR: boolean = true;
  shouldHideM: boolean = true;
  shouldHideT: boolean = true;
  findRestaurants: string;
  locationR: string;
  findMovies: string;
  locationM: string;
  findTransport: string;
  locationTFrom: string;
  locationTTo: string;
  myInput: string;
  venueNames: Array<String>;

  constructor(public navCtrl: NavController, public navParams: NavParams, venueService:VenueService,
    private http: Http, private app: App) {
    // this.venues = venueService.getAllVenues();
    this.findRestaurants = "";
    this.locationR = "";
    this.findMovies = "";
    this.locationR = "";
    this.findTransport= "";
    this.locationTFrom = "";
    this.locationTTo = "";
    console.log("running");
    // this.initializeNames();
  }

  // async initializeNames(){
  //   this.http.get("http://localhost:3000/getVenueNames/" ,{
  //   }).subscribe(
  //     result => {
  //       this.venueNames = result.json();
  //       //result.body(); 
  //     },

  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  revealR(){
    this.shouldHideR = !this.shouldHideR;
  }

  revealM(){
    this.shouldHideM = !this.shouldHideM;
  }

  revealT(){
    this.shouldHideT = !this.shouldHideT;
  }

  bookR(){
    console.log(this.findRestaurants);
    console.log(this.locationR);
    this.navCtrl.push(VenuesPage, {
      searchParameter: this.findRestaurants,
      locationParameter: this.locationR
    })

  }

  bookM(){
    console.log(this.findMovies);
    console.log(this.locationM);
  }

  bookT(){
    console.log(this.findTransport);
    console.log(this.locationTFrom);
    console.log(this.locationTTo);
  }

  // onInput(ev: any){
  //   this.initializeNames();
  //   // set val to the value of the searchbar
  //   const val = ev.target.value;
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     console.log("runningTrim");
  //     this.venueNames = this.venueNames.filter((name) => {
  //       return (name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }

  // }

}


