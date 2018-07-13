import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { Http, Response } from '@angular/http';
import { PaymentPage } from '../payment/payment';
import { ModalController } from 'ionic-angular';
import { MapPage } from '../map/map';


/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  public map: Array<Array<number>>;
  public venueId: number;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, 
    private venueService:VenueService, private http: Http, private app: App) {
    this.venueId = 2;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  presentPaymentModal() {
    let paymentModal = this.modalCtrl.create(PaymentPage);
    paymentModal.present();
  }

  goToMap() {
    this.navCtrl.push(MapPage);
  }




}
