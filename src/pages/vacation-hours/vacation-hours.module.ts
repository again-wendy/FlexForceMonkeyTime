import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacationHoursPage } from './vacation-hours';

@NgModule({
  declarations: [
    VacationHoursPage,
  ],
  imports: [
    IonicPageModule.forChild(VacationHoursPage),
  ],
})
export class VacationHoursPageModule {}
