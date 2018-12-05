import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { AuthProvider } from '../../providers/auth/auth';
import { AuthtestProvider } from '../../providers/authtest/authtest';
//import { AuthtestProvider } from '../../providers/authtest/authtest';
//import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder,
    private authProv: AuthtestProvider) {
    this.login = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  submitForm() {
    this.authProv.startAuthentication().then((user) => {
      console.log(user);
    });
  }

}
