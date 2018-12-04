import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BackgroundMode } from '@ionic-native/background-mode';
import { IonicStorageModule } from '@ionic/storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Push } from '@ionic-native/push';
import { DatePicker } from '@ionic-native/date-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StopwatchPage } from '../pages/stopwatch/stopwatch';
import { RegisterTimePage } from '../pages/register-time/register-time';
import { VacationHoursPage } from '../pages/vacation-hours/vacation-hours';
import { ProfilePage } from '../pages/profile/profile';
import { TimesheetsPage } from '../pages/timesheets/timesheets';
import { TimeIntervalModalPage } from '../pages/timeinterval-modal/timeinterval-modal';
import { AllowanceModalPage } from '../pages/allowance-modal/allowance-modal';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '/translations.json');
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    StopwatchPage,
    RegisterTimePage,
    TimesheetsPage,
    VacationHoursPage,
    ProfilePage,
    TimeIntervalModalPage,
    AllowanceModalPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    }),
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    StopwatchPage,
    RegisterTimePage,
    TimesheetsPage,
    VacationHoursPage,
    ProfilePage,
    TimeIntervalModalPage,
    AllowanceModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    BackgroundMode,
    Push,
    DatePicker
  ]
})
export class AppModule {}
