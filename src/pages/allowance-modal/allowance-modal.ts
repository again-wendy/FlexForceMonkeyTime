import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import _ from 'lodash';


@IonicPage()
@Component({
  selector: 'page-allowance-modal',
  templateUrl: 'allowance-modal.html',
})
export class AllowanceModalPage {

  allowances: Array<string> = ["Unknown", "Expenses", "Transportation", "Travel Expenses", "Mileage", "Fuel", "Reduction", "Travel Hours", "Parkingfee", "Stayexpense", "Meal"];
  line;
  tempLine;

  constructor(public viewCtrl: ViewController, params: NavParams) {
    this.line = params.get('line');
    this.tempLine = _.cloneDeep(this.line);
  }

  cancel = () => {
    this.line = _.cloneDeep(this.tempLine);
    this.dismiss();
  }

  dismiss = () => {
    this.viewCtrl.dismiss(this.line);
  }

}
