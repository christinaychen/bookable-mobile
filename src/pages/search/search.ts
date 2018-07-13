import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { VenuesPage } from '../venues/venues';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, venueService:VenueService) {
    // this.venues = venueService.getAllVenues();
    this.findRestaurants = "";
    this.locationR = "";
    this.findMovies = "";
    this.locationR = "";
    this.findTransport= "";
    this.locationTFrom = "";
    this.locationTTo = "";
    
  }


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



}


