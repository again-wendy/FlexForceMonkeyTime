import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnauthorizedPage } from './unauthorized';

@NgModule({
  declarations: [
    UnauthorizedPage,
  ],
  imports: [
    IonicPageModule.forChild(UnauthorizedPage),
  ],
})
export class UnauthorizedPageModule {}
