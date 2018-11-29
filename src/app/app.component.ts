import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { StopwatchPage } from '../pages/stopwatch/stopwatch';
import { RegisterTimePage } from '../pages/register-time/register-time';
import { VacationHoursPage } from '../pages/vacation-hours/vacation-hours';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage:any = HomePage;

  menuPages = [
    {title: 'Stopwatch', icon: 'stopwatch', page: StopwatchPage},
    {title: 'Register time', icon: 'time', page: RegisterTimePage},
    {title: 'Vacation hours', icon: 'calendar', page: VacationHoursPage},
    {title: 'Your profile', icon: 'cog', page: ProfilePage},
  ]

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    authProv: AuthProvider,
    translate: TranslateService,
    storage: Storage
    ) {

    storage.get("lang").then((res) => {
      if(res == null) {
        translate.setDefaultLang('en');
        storage.set("lang", "en");
      } else {
        translate.setDefaultLang(res);
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // if(authProv.canLogin) {
      //   this.rootPage = HomePage;
      // } else {
      //   this.rootPage = LoginPage;
      // }
    });
  }

  goToPage(page) {
    this.nav.push(page.page);
  }
}


