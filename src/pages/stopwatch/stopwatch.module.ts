import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StopwatchPage } from './stopwatch';

@NgModule({
  declarations: [
    StopwatchPage,
  ],
  imports: [
    IonicPageModule.forChild(StopwatchPage),
  ],
})
export class StopwatchPageModule {}
