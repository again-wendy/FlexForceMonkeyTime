import { Component } from '@angular/core';
import { StopwatchPage } from '../stopwatch/stopwatch';
import { RegisterTimePage } from '../register-time/register-time';
import { TimesheetsPage } from '../timesheets/timesheets';
import { VacationHoursPage } from '../vacation-hours/vacation-hours';
import { ProfilePage } from '../profile/profile';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  index: number;

  tab1Root = StopwatchPage;
  tab2Root = RegisterTimePage;
  tab3Root = TimesheetsPage;
  tab4Root = VacationHoursPage;
  tab5Root = ProfilePage;

  constructor(params: NavParams) {
    this.index = params.get('opentab');
  }
}
