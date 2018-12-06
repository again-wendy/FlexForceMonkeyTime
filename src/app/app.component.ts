import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { LoginPage } from '../pages/login/login';
//import { AuthProvider } from '../providers/auth/auth';
import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { StopwatchPage } from '../pages/stopwatch/stopwatch';
import { RegisterTimePage } from '../pages/register-time/register-time';
import { VacationHoursPage } from '../pages/vacation-hours/vacation-hours';
import { ProfilePage } from '../pages/profile/profile';
import { Push, PushOptions, PushObject } from '@ionic-native/push';
import { enviroment } from '../enviroments/enviroment';
import { TimesheetsPage } from '../pages/timesheets/timesheets';
import { AuthtestProvider } from '../providers/authtest/authtest';

const senderId = enviroment.senderId;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav;
  rootPage:any = HomePage;

  menuPages = [
    {title: 'Stopwatch', icon: 'stopwatch', page: StopwatchPage},
    {title: 'MakeTimesheet', icon: 'time', page: RegisterTimePage},
    {title: 'ViewTimesheets', icon: 'clock', page: TimesheetsPage},
    {title: 'VacationHours', icon: 'calendar', page: VacationHoursPage},
    {title: 'YourProfile', icon: 'settings', page: ProfilePage},
  ]

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    translate: TranslateService,
    storage: Storage,
    authProv: AuthtestProvider,
    public push: Push,
    public alertCtrl: AlertController
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
      
      // if(authProv.isLoggedIn()) {
      //   this.rootPage = HomePage;
      // } else {
      //   this.rootPage = LoginPage;
      // }

      //this.initPushNotification();
    });
  }

  goToPage = (page) => {
    this.nav.push(page.page);
  }

  initPushNotification = () => {
    const options: PushOptions = {
      android: {
        senderID: senderId
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      browser: {
        pushServiceURL: 'http://push.api.phonegap.com/v1/push'
      }
    }
    const pushObject: PushObject = this.push.init(options);

    pushObject.on('stopwatchTimer').subscribe((data: any) => {
      console.log('message -> ' + data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Your logic here
              console.log("message: " + data.message);
              //this.nav.push(DetailsPage, { message: data.message });
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Your logic on click of push notification directly
        console.log("message: " + data.message);
        console.log('Push notification clicked');
      }
    })
  }
}


