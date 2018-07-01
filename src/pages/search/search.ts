import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';

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
  shouldHide: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, venueService:VenueService) {
    this.venues = venueService.getAllVenues();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  reveal(){
    this.shouldHide = !this.shouldHide;
  }



}


