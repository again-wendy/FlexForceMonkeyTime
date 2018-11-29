import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

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
}

