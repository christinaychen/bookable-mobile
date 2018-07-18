import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { Http } from '@angular/http';

declare var stripe: any;
declare var elements: any;

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

export class PaymentPage implements AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  amount: number;
  orderItemId: number;
  
  constructor(private http:Http, public viewCtrl: ViewController,private cd: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams) {
  }



  closeModal() {
    this.viewCtrl.dismiss();
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);
    // const { token, error } = await stripe.createToken(this.card, {
    //   email: this.email
    // });
    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // this.http
      // .post("http://localhost:3000/purchase", {
      //   stripeToken: stripe.token,
      //   productId: stripe.productId,
      // });   
      this.http
      .post(`http://localhost:3000/charge?jwt=${localStorage.getItem("TOKEN")}&orderItemId=${token.productId}`, {
      stripeToken: stripe.token,
      orderItemId: stripe.productId
      })
      .subscribe(
        result => {
          console.log(result.json());
        }
      ); 
    }
  }

  ngAfterViewInit() {
    const style = {
      base: {
        lineHeight: '24px',
        fontFamily: 'monospace',
        fontSmoothing: 'antialiased',
        fontSize: '19px',
        '::placeholder': {
          color: 'purple'
        }
      }
    };
  
    this.card = elements.create('card', { style });
    this.card.mount(this.cardInfo.nativeElement);
  
    this.card.addEventListener('change', this.cardHandler);
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
