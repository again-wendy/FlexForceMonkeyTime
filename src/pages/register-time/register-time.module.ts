import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterTimePage } from './register-time';

@NgModule({
  declarations: [
    RegisterTimePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterTimePage),
  ],
})
export class RegisterTimePageModule {}
