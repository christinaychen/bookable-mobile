import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';
import { TabsPage } from '../pages/tabs/tabs';
 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 
    rootPage:any = SplashPage;
 
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
 
        platform.ready().then(() => {
 
            statusBar.styleDefault();
 
            // let splash = modalCtrl.create(SplashPage);
            // splash.present();
 
        });
 
    }
 
}
