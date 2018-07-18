import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItineraryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-itinerary',
  templateUrl: 'itinerary.html',
})
export class ItineraryPage {

  public row: number;
  public column: number;
  public venue: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.row = this.navParams.get("rowParameter");  //new Product();
    this.column = this.navParams.get("columnParameter");  //new Product();
    this.venue = this.navParams.get("venueParameter");  //new Product();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItineraryPage');
  }

}
