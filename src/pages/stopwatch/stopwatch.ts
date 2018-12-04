import { Component } from '@angular/core';
import { IonicPage, ActionSheetController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@IonicPage()
@Component({
  selector: 'page-stopwatch',
  templateUrl: 'stopwatch.html',
})
export class StopwatchPage {

  seconds: number;
  minutes: number;
  hours: number;
  interval: any;
  started: boolean;
  stopped: boolean = false;
  paused: boolean = false;
  total: any;

  assignments: Array<any> = [
    {
      name: "FlexForceMonkey",
      rates: [
        {
          id: 0,
          name: "Development",
          run: true,
          quantity: null
        },
        {
          id: 1,
          name: "Support",
          run: false,
          quantity: null
        },
        {
          id: 2,
          name: "Implementation",
          run: false,
          quantity: null
        }
      ]
    }, {
      name: "Marketing",
      rates: [
        {
          id: 3,
          name: "Marketing",
          run: false,
          quantity: null
        }
      ]
    }
  ]

  constructor(
    private storage: Storage, 
    private translate: TranslateService,
    public actionSheetCtrl: ActionSheetController) {}

  // Add numbers to hours, minutes and seconds. Used in interval
  add = () => {
    this.seconds++;
    if(this.seconds >= 60) {
      this.seconds = 0;
      this.minutes++;
      if(this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
  }

  // When view is loaded check if there is stopwatch data in storage.
  // If there is: calculate the time that's passed and add it to data in storage and begin interval
  // If not: set all data to default
  ionViewDidLoad = () => {
    this.storage.get("stopwatch").then((res) => {
      if(res != null) {
        this.calculatePassedTime(res);
      } else {
        this.setDefault();
      }
    })
  }

  // Calculate the time that's passed 
  calculatePassedTime = (timeObject: any) => {
    let now = Date.now();
    // Get total seconds between the times
    let diff = Math.abs(now - timeObject.left) / 1000;

    // Calculate and subtract whole hours
    let hours = Math.floor(diff / 3600) % 24;

    // Calculate and subtract whole minutes
    let minutes = Math.floor(diff / 60) % 60;

    // What is left is seconds
    let seconds = Math.floor(diff % 60);

    this.seconds = timeObject.seconds + seconds;
    this.minutes = timeObject.minutes + minutes;
    this.hours = timeObject.hours + hours;
    this.startStopwatch();
  }

  // This starts the interval
  timer = () => {
    this.interval = setInterval(this.add, 1000);
  }

  // Buttonclick to start the stopwatch
  startStopwatch = () => {
    this.timer();
    this.started = true;
    this.stopped = false;
    this.paused = false;
    this.total = undefined;
  }

  // Buttonclick to pause the stopwatch
  pauseStopwatch = () => {
    this.paused = true;
    clearTimeout(this.interval);
  }

  // Buttonclick to stop the stopwatch
  stopStopwatch = () => {
    this.started = false;
    this.stopped = true;
    clearTimeout(this.interval);
  }

  // Store data when user leaves view if stopwatch is running
  ionViewDidLeave = () => {
    if(this.started) {
      this.storage.set("stopwatch", {
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
        left: Date.now()
      });
    }
    this.storage.get("stopwatch").then(res => console.log(res));
  }

  // Set all data to default
  setDefault = () => {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.started = false;
    this.stopped = false;

    this.storage.get("stopwatch").then((res) => {
      if(res != null) {
        this.storage.remove("stopwatch");
      } 
    });
  }

  // Create an actionsheet to ask user if he is sure that he wants to delete the time
  noTimesheet() {
    var title;
    var yes;
    var cancel;
    this.translate.get("WillDeleteTime").subscribe(res => title = res);
    this.translate.get("Yes").subscribe(res => yes = res);
    this.translate.get("Cancel").subscribe(res => cancel = res);

    const actionSheet = this.actionSheetCtrl.create({
      title: title,
      buttons: [
        {
          text: yes,
          role: 'destructive',
          handler: () => {
            this.setDefault();
          }
        }, {
          text: cancel
        }
      ]
    });
    actionSheet.present();
  }

  // Add the time to a new timesheet
  addToTimesheet = () => {
    console.log("Timesheet wordt opgebouwd! Uren: " + this.hours + ", minuten: " + this.minutes + " en seconden: " + this.seconds);
  }

}
