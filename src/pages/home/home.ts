import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StopwatchPage } from '../stopwatch/stopwatch';
import { RegisterTimePage } from '../register-time/register-time';
import { VacationHoursPage } from '../vacation-hours/vacation-hours';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToStopwatch = () => {
    this.navCtrl.push(StopwatchPage);
  }

  goToRegisterTime = () => {
    this.navCtrl.push(RegisterTimePage);
  }

  goToVacationHours = () => {
    this.navCtrl.push(VacationHoursPage);
  }

  goToProfile = () => {
    this.navCtrl.push(ProfilePage);
  }
}
