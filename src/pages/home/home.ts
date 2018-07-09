import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { VenueService } from '../../services/venue.services';
import { Venue } from '../../models/venue';
import { TestPage } from '../test/test';
import { Http } from '../../../node_modules/@angular/http';
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



  constructor(public navCtrl: NavController, public navParams: NavParams, venueService:VenueService,
  private http: Http) {
    this.venues = venueService.getAllVenues();
    if (localStorage.getItem("TOKEN")) {
      alert("Already logged in");
    
      this.http.get("http://localhost:3000/verify?jwt=" + localStorage.getItem("TOKEN")).subscribe(
        result => {
          console.log(result.json());
        },
  
        err => {
          // Invalid, login!
        }
      );

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

  goToTest(){
    this.navCtrl.push(TestPage);
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
