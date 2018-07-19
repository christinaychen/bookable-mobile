import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { VenueService } from '../../services/venue.services';
import { MapPage } from '../map/map';
import { VenueInfoPage } from '../venue-info/venue-info';
import { Http, Headers } from '@angular/http';


/**
 * Generated class for the VenuesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-venues',
  templateUrl: 'venues.html',
})
export class VenuesPage {
  public search: string;
  public location: string;
  public venueName: string;

  public businesses;
  public businessSearch=[];

  public latitude: number = 36.0014;
  public longitude: number = -78.9382;
  public radius: number=16093;


  constructor(private http: Http, public navCtrl: NavController, 
              public navParams: NavParams, 
              venueService:VenueService) {
    this.search = this.navParams.get("searchParameter");  
    this.location = this.navParams.get("locationParameter"); 
    this.getBusinesses();
 
  }
  ionViewCanEnter() {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuesPage');
  }

  goToMap(){
    this.navCtrl.push(MapPage, {
      nameParameter: this.venueName
    });
  }

  goToDetails(business) {
    this.navCtrl.push(VenueInfoPage, {
      address: business.location.address1 + ", " + business.location.city + ", " + business.location.state + " " + business.location.zip_code,
      rating: business.rating,
      price: business.price,
      categories: business.categories,
      coordinates: business.coordinates,
      business: business,
    })
  }

  getBusinesses() {
    this.http
    .get(`http://localhost:3000/businesses?latitude=${this.latitude}&longitude=${this.longitude}&radius=${this.radius}`, {
      })
      .subscribe(
        result => {
          let tempVar = result.json().body;
          this.businesses = tempVar.businesses;
          for (let business of this.businesses) {
            if (business.name == this.search) {
              console.log(business.name);
              this.businessSearch.push(business);

            }
          }

        }
      )
    }

}
