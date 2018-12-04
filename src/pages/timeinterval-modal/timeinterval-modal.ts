import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import _ from 'lodash';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'timeinterval-modal.html',
})
export class TimeIntervalModalPage {

  rate: any;
  tempRate: any;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.rate = params.get('rate');
    this.tempRate = _.cloneDeep(this.rate);
  }

  cancel = () => {
    this.rate = _.cloneDeep(this.tempRate);
    this.dismiss();
  }

  dismiss = () => {
    this.viewCtrl.dismiss(this.rate);
  }

}
