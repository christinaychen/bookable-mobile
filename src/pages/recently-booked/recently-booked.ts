import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RecentlyBookedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recently-booked',
  templateUrl: 'recently-booked.html',
})
export class RecentlyBookedPage {
  public userId: number;
  public orderItemsArray: any;

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecentlyBookedPage');
  }

  getId() {
    this.http
    .get(`http://localhost:3000/customer?jwt=${localStorage.getItem("TOKEN")}`)
    .subscribe(
      result => {
        this.userId = result.json().userId;
      }
    );
  }

  getVenue() {

  }

  getOrders(){
    this.http
    .get(`http://localhost:3000/orderItems/?userId=${this.userId}`)
    .subscribe(
      result => {
        this.orderItemsArray = result.json();


      }
    );
  }

}
