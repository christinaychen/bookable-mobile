import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecentlyBookedPage } from './recently-booked';

@NgModule({
  declarations: [
    RecentlyBookedPage,
  ],
  imports: [
    IonicPageModule.forChild(RecentlyBookedPage),
  ],
})
export class RecentlyBookedPageModule {}
