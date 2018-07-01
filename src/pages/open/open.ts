import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { SplashScreen } from '@ionic-native/splash-screen';



/**
 * Generated class for the OpenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-open',
  templateUrl: 'open.html',
})
export class OpenPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, private splashScreen: SplashScreen) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpenPage');
  }

  navigateToHome() {
    this.splashScreen.show();
    this.navCtrl.push(TabsPage);
  }

}
