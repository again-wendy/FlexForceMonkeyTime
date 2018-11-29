import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-stopwatch',
  templateUrl: 'stopwatch.html',
})
export class StopwatchPage {

  date: Date;
  laps: number = 0;

  constructor() {}

  format(ms) {
    let minutes = Math.floor(ms / (1000 * 60));
    let seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
    let fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 10);

    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds + (fract < 10 ? '0' : '') + fract;
  }

  startStopwatch() {
    this.date = new Date(2000, 1, 1, 0, 0, 0);
    setInterval(() => {
      let min = this.date.getMinutes();
      this.date.setMinutes(min + 1);
    }, 1000);
  }

}
