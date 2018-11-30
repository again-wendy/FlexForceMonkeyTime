import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-register-time',
  templateUrl: 'register-time.html',
})
export class RegisterTimePage {

  currentDay: Date;

  constructor() {}

  ionViewDidLoad = () => {
    this.currentDay = new Date();
  }

}
