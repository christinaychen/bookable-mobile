import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',


})

export class PaymentPage {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  message: string;

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }


    // openCheckout() {
    //   var handler = (<any>window).StripeCheckout.configure({
    //     key: 'pk_test_oi0sKPJYLGjdvOXOM8tE8cMa',
    //     locale: 'auto',
    //     token: function (token: any) {
    //       // You can access the token ID with `token.id`.
    //       // Get the token ID to your server-side code for use.
    //     }
    //   });
  
    //   handler.open({
    //     name: 'Demo Site',
    //     description: '2 widgets',
    //     amount: 2000
    //   });
  
    // }

    // getToken() {
    //   this.message = 'Loading...';
  
    //   (<any>window).Stripe.card.createToken({
    //     number: this.cardNumber,
    //     exp_month: this.expiryMonth,
    //     exp_year: this.expiryYear,
    //     cvc: this.cvc
    //   }, (status: number, response: any) => {
    //     if (status === 200) {
    //       this.message = `Success! Card token ${response.card.id}.`;
    //     } else {
    //       this.message = response.error.message;
    //     }
    //   });
    // }

}
