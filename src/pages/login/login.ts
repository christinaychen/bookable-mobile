import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { TabsPageModule } from '../tabs/tabs.module';
import { RegistrationPage } from '../registration/registration';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public email: string;
  public password: string;
  public name: string;

  constructor(public navCtrl: NavController, private http:Http, private app: App, public navParams: NavParams) {
    this.name = "test";
    if (localStorage.getItem("TOKEN")) {
      this.http.get("https://bookable-api.herokuapp.com/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
        result => {
          console.log(result.json());
        },
  
        err => {
          // Invalid, login!
        }
      );
      //this.app.getRootNav().setRoot(TabsPage);
      this.goToTabs();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.http
      .post("http://localhost:3000/login", {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        result => {
          console.log(result);

          var jwtResponse = result.json();
          var token = jwtResponse.token;

          localStorage.setItem("TOKEN", token);
          let t = localStorage.getItem("TOKEN");
          this.goToTabs();
        },

        err => {
          console.log(err);
        }
      );
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

  goToTabs(){
    this.navCtrl.push(TabsPage);
  }

  goToRegistration(){
    this.navCtrl.push(RegistrationPage);
  }

}
