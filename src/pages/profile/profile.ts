import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  lang: string;

  constructor(private translate: TranslateService) {
    this.lang = translate.getDefaultLang();
  }

  switchLang() {
    this.translate.use(this.lang);
  }

}
