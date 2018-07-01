import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Searchbar } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OpenPage } from '../pages/open/open';
import { VenueService } from '../services/venue.services';
import { SearchPage } from '../pages/search/search';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';

@NgModule({
  declarations: [
    MyApp,
    OpenPage,
    HomePage,
    SearchPage,
    ItineraryPage,
    TabsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OpenPage,
    HomePage,
    SearchPage,
    ItineraryPage,
    TabsPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VenueService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
