import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Searchbar } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VenueService } from '../services/venue.services';
import { SearchPage } from '../pages/search/search';
import { ItineraryPage } from '../pages/itinerary/itinerary';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { ProfilePage } from '../pages/profile/profile';
import { FavoritesPage } from '../pages/favorites/favorites';
import { HttpModule } from '@angular/http';
import { TestPage } from '../pages/test/test';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { RegistrationService } from '../services/registration.services';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    ItineraryPage,
    TabsPage,
    SplashPage,
    ProfilePage,
    FavoritesPage,
    TestPage,
    LoginPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    ItineraryPage,
    TabsPage,
    SplashPage,
    ProfilePage,
    FavoritesPage,
    TestPage,
    LoginPage,
    RegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    VenueService,
    RegistrationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
