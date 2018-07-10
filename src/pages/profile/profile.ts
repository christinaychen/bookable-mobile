import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesPage } from '../favorites/favorites';
import { RecentlyBookedPage } from '../recently-booked/recently-booked';
import { StatsPage } from '../stats/stats';
import { SettingsPage } from '../settings/settings';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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


}
