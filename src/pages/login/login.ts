import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';

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

  constructor(public navCtrl: NavController, private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.http
      .post("http://localhost:3000/login", {
        email: this.email,
        password: this.password
      })
      .subscribe(
        result => {
          console.log(result);

          var jwtResponse = result.json();
          var token = jwtResponse.token;

          localStorage.setItem("TOKEN", token);

          let t = localStorage.getItem("TOKEN");
          this.goToProfile();
        },

        err => {
          console.log(err);
        }
      );
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }

}
