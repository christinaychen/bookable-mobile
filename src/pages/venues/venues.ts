import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { VenueService } from '../../services/venue.services';
import { MapPage } from '../map/map';

/**
 * Generated class for the VenuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-venues',
  templateUrl: 'venues.html',
})
export class VenuesPage {
  public search: string;
  public location: string;
  public venueName: string;


  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              venueService:VenueService) {
    this.search = this.navParams.get("searchParameter");  
    this.location = this.navParams.get("locationParameter");  
    this.venueName = "plsWork";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuesPage');
  }

  goToMap(){
    this.navCtrl.push(MapPage, {
      nameParameter: this.venueName
    });
  }

}
