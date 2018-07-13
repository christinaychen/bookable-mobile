import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VenueInfoPage } from './venue-info';

@NgModule({
  declarations: [
    VenueInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VenueInfoPage),
  ],
})
export class VenueInfoPageModule {}
