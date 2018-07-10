import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegistrationService } from '../../services/registration.services';
import { Customer } from '../../models/customers';
import { TabsPage } from '../tabs/tabs';
import { Http } from '@angular/http';



/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  public name: string;
  public age: number;
  public email: string;
  public password: string;
  public Customer: Customer;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public registrationService: RegistrationService,
              private http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
    /*this.registrationService.getAllProducts(
      (err, data) => {
        // TODO: Use the data
        if (err) {
          // Raise an alert UI
          return;
        }

      }
    ); */
  }

  finalizeRegister(){
    //SEE TAS TO SEE WHY THIS DOESNT WORK!
    try{
      this.registrationService.createCustomer({
        name: this.name,
        age: this.age,
        email: this.email,
        password: this.password
      }, function(){})
    }
    catch(err){
      console.log("email already exists");
    }
    this.navCtrl.push(TabsPage);
  }


}
