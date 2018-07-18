import { Component } from '@angular/core';
import { NavController, NavParams, App, TabHighlight } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { Http, Response } from '@angular/http';
import { CartPage } from '../cart/cart';
import { ItineraryPage } from '../itinerary/itinerary';
import { PaymentPage } from '../payment/payment';


/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  public venueName: string;
  public venueId: number;
  public map: Array<Array<number>>
  public buttonColor: string;
  public clicked: boolean;
  public color: string;
  public row: number;
  public column: number;
  public price: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private venueService:VenueService, private http: Http, private app: App) {
    this.venueName = this.navParams.get("nameParameter");  
    this.venueId = 3;
    this.map = [];
    this.map[0] = [];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  showMap(){
    console.log("running");
    this.http
      .post("http://localhost:3000/Maps/" + this.venueId, {
      }).subscribe(
        result => {
          this.map = result.json();
          console.log(this.map);
          //result.body(); 
        },

        err => {
          console.log(err);
        }
      );
  }
  
  addEvent(row: number, column: number){
    console.log("click!");
    console.log(row);
    console.log(column);
    this.price = this.map[row][column];
    this.row = (column*1+1);
    this.column =  (row*1+1);
    if (this. price== 0 || this.price == -1){
        this.buttonColor = '#ff0000'; //desired Color
        this.clicked = !this.clicked;
      }
      else{
        this.buttonColor = '#88BBD6'; //desired Color
        this.clicked = !this.clicked;
      }
    

     // this.clicked = !this.clicked;
    
    //this.color = '#CDCDCD';
    /*
    YOUR FUNCTION CODE
    */

  }

  makeReserve(){
    this.http
      .post("http://localhost:3000/makeOrder/", {
        x: (this.row*1-1),
        y: (this.column*1-1),
        venueId: 3,
        purchaseId: 1,
        time: "12:30",
        amount: this.price
      }).subscribe(
        result => {
          
          console.log(result);
        },

        err => {
          console.log(err);
        }
      );
    console.log(this.price);
    this.navCtrl.push(PaymentPage, {
      rowParameter: this.row,
      columnParameter: this.column,
      venueParameter: 3,
      priceParameter: this.price
    });
  }





}
