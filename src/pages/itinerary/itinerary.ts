import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { orderItem } from '../../models/venue';

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
  public userId: number;
  public orderItems: orderItems[]

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.row = this.navParams.get("rowParameter");  //new Product();
    this.column = this.navParams.get("columnParameter");  //new Product();
    this.venue = this.navParams.get("venueParameter");  //new Product();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItineraryPage');
  }

  getName() {
    this.http
    .get(`http://localhost:3000/customer?jwt=${localStorage.getItem("TOKEN")}`)
    .subscribe(
      result => {
        this.userId = result.json().userId;
      }
    );
  }

  getOrderItems() {
    this.http
    .get(`http://localhost:3000/orderItems?userId=${this.userId}`)
    .subscribe(
      result => {
        this.orderItems = result.json();
      }
    );
  }

}
