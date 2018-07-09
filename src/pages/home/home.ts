import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { ProfilePage } from '../profile/profile';
import { LoginPage } from '../login/login';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  // @ViewChild('myTabs') tabRef: Tabs;

  public venues:Array<Venue>;
  private name: string;



  constructor(public navCtrl: NavController, public navParams: NavParams, venueService:VenueService, private app: App) {
    this.venues = venueService.getAllVenues();
    this.name = this.navParams.get("nameParameter");
    console.log(this.navParams.get("nameParameter") + "Hello");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==3)
      this.slides.stopAutoplay();
  }


  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
