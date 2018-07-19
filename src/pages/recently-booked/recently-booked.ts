import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { RecentlyBooked } from '../../models/recently-booked';
import { OrderItem } from '../../models/order-item';

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
  public orderItemsArray: OrderItem[];
  public yelpvenueid;
  public bookedItemArray=[];

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
    this.http
    .get(`http://localhost:3000/venue/?venueId=${this.yelpvenueid}`)
    .subscribe(
      result => {
        return result.json();


      }
    );
  }


  getOrders(){
    this.http
    .get(`http://localhost:3000/orderItems/?userId=${this.userId}`)
    .subscribe(
      result => {
        this.orderItemsArray = result.json();

        for (let orderitem of this.orderItemsArray) {
          let bookeditem = new RecentlyBooked();
          bookeditem.venueId = orderitem.venueId;
          bookeditem.yelpVenueId = orderitem.yelpVenueId;
          bookeditem.x=orderitem.x;
          bookeditem.y=orderitem.y;

          this.http
          .get(`http://localhost:3000/venue/?venueId=${bookeditem.yelpVenueId}`)
          .subscribe(
            result => {
              let res= result.json();
              bookeditem.image_url=res.image_url;
              bookeditem.name = res.name;
      
            }
          );



          this.bookedItemArray.push(bookeditem);
          
        }
        console.log(this.bookedItemArray);



      }
    );
  }

}
