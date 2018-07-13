import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

 
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {
 
  constructor(public viewCtrl: ViewController, public splashScreen: SplashScreen, public navCtrl: NavController) {
 
  }
 
  ionViewDidEnter() {
 
    this.splashScreen.hide();
 
    setTimeout(() => {
      this.navCtrl.push(LoginPage);
    }, 2000);
 
  }
 
}