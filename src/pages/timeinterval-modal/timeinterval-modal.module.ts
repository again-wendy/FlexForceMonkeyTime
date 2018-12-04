import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeIntervalModalPage } from './timeinterval-modal';

@NgModule({
  declarations: [
    TimeIntervalModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeIntervalModalPage),
  ],
})
export class TimeIntervalModalPageModule {}
