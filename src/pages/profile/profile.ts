import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { RecentlyBookedPage } from '../recently-booked/recently-booked';
import { StatsPage } from '../stats/stats';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';
import { Customer } from '../../models/customers';
import { get } from 'http';
import { Http } from '@angular/http';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public cus: Customer = new Customer();
  public cusname: string;
  constructor(public navCtrl: NavController, private http:Http, public navParams: NavParams){  
    this.getName();
  }
  getName() {
    this.http
    .get(`http://localhost:3000/customer?jwt=${localStorage.getItem("TOKEN")}`)
    .subscribe(
      result => {
        this.cusname = result.json().name;

      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  goToFavorites(){
    this.navCtrl.push(FavoritesPage);
  }

  goToRecentlyBooked() {
    this.navCtrl.push(RecentlyBookedPage);
  }

  goToStats() {
    this.navCtrl.push(StatsPage);
  }

  goToSettings() {
    this.navCtrl.push(SettingsPage);
  }

  logout() {
    localStorage.removeItem("TOKEN");
    this.navCtrl.setRoot(LoginPage);
  }
}
