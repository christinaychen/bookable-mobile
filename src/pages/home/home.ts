import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { ProfilePage } from '../profile/profile';


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



  constructor(public navCtrl: NavController, public navParams: NavParams, venueService:VenueService, private app: App) {
    this.venues = venueService.getAllVenues();
    if (localStorage.getItem("TOKEN")) {
      this.app.getRootNav().setRoot(ProfilePage);
    }
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


}
