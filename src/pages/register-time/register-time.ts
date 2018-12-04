import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import moment from 'moment';
import { DatePicker } from '@ionic-native/date-picker';
import { TimeIntervalModalPage } from '../timeinterval-modal/timeinterval-modal';
import { AllowanceModalPage } from '../allowance-modal/allowance-modal';

@IonicPage()
@Component({
  selector: 'page-register-time',
  templateUrl: 'register-time.html',
})
export class RegisterTimePage {

  currentDay: Date;
  daysOfWeek: any;
  assignments: Array<any> = [
    {
      name: "FlexForceMonkey",
      rates: [
        {
          name: "Development",
          quantity: null
        },
        {
          name: "Support",
          quantity: null
        },
        {
          name: "Implementation",
          quantity: null
        }
      ]
    }, {
      name: "Marketing",
      rates: [
        {
          name: "Marketing",
          quantity: null
        }
      ]
    }
  ]
  allowances: Array<any> = [
    {
      name: "Travel expenses",
      price: 4.50
    }
  ]

  constructor(private datePicker: DatePicker, private modalCtrl: ModalController, private navCtrl: NavController) {}

  ionViewDidLoad = () => {
    this.currentDay = new Date();
    this.getTheWeek(new Date());
  }

  openCalendar = () => {
    this.datePicker.show({
      date: this.currentDay,
      mode: 'date'
    }).then(
      date => this.changeDate(date),
      err => console.log('Error: ' + err)
    )
  }

  getTheWeek = (fromDate) => {
    //var monday = new Date(fromDate.setDate(fromDate.getDate()-(fromDate.getDay() - 1))), result = [new Date(monday)];
    var mon = moment(fromDate).startOf('isoWeek').format();
    var monday = new Date(mon);
    var result = [new Date(monday)]
    while (monday.setDate(monday.getDate()+1) && monday.getDay()!==1) {
        result.push(new Date(monday));
    }
    this.setWeekDates(result);
  }

  setWeekDates = (dates: Array<Date>) => {
    this.daysOfWeek = [];
    for(var i = 0; i < dates.length; i++) {
      if(this.checkDay(dates[i]) == true) {
        this.daysOfWeek.push({
          day: dates[i],
          selected: true
        });
      } else {
        this.daysOfWeek.push({
          day: dates[i],
          selected: false
        });
      }
    }
  }

  checkDay = (date): boolean => {
    if (this.currentDay.getDate() == date.getDate() &&
      this.currentDay.getMonth() == date.getMonth() &&
      this.currentDay.getFullYear() == date.getFullYear()) {
      return true;
    } else { return false; }
  }

  changeDate = (date: Date) => {
    this.currentDay = date;
    let selected = new Date(date);
    this.getTheWeek(selected);
  }

  addAllowance = () => {
    this.allowances.push({
      name: null,
      price: null
    });
    let l = this.allowances.length - 1;
    this.openAllowanceModal(this.allowances[l]);
  }

  openAllowanceModal = (line) => {
    const modal = this.modalCtrl.create(AllowanceModalPage, {line: line});
    modal.onDidDismiss(data => {
      line = data;
    });
    modal.present();
  }

  openTimeIntervalModal = (rate) => {
    const modal = this.modalCtrl.create(TimeIntervalModalPage, {rate: rate});
    modal.onDidDismiss(data => {
      rate = data;
    });
    modal.present();
  }

  save = () => {
    this.navCtrl.popToRoot();
  }

}
