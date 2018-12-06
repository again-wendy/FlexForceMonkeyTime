import { Component } from '@angular/core';
import { StopwatchPage } from '../stopwatch/stopwatch';
import { RegisterTimePage } from '../register-time/register-time';
import { TimesheetsPage } from '../timesheets/timesheets';
import { VacationHoursPage } from '../vacation-hours/vacation-hours';
import { ProfilePage } from '../profile/profile';
import { NavParams } from 'ionic-angular';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

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
  
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;

  constructor(params: NavParams, private translate: TranslateService) {
    this.index = params.get('opentab');

    this.setLangTitles();

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setLangTitles();
    })
  }

  setLangTitles = () => {
    this.translate.get("Stopwatch").subscribe(data => this.title1 = data);
    this.translate.get("Register").subscribe(data => this.title2 = data);
    this.translate.get("Timesheets").subscribe(data => this.title3 = data);
    this.translate.get("Vacation").subscribe(data => this.title4 = data);
    this.translate.get("Profile").subscribe(data => this.title5 = data);
  }
}
