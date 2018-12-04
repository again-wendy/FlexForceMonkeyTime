import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllowanceModalPage } from './allowance-modal';

@NgModule({
  declarations: [
    AllowanceModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AllowanceModalPage),
  ],
})
export class AllowanceModalPageModule {}
