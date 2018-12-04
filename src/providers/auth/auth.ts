import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { NavController } from 'ionic-angular';
import { enviroment } from '../../enviroments/enviroment';
import { IUser } from '../../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { IChangePassword } from '../../interfaces/changePassword';
import { IEmail } from '../../interfaces/email';
//import { ILogin } from '../../interfaces/login';

const authUrl = enviroment.authUrl;

@Injectable()
export class AuthProvider {

  url: string;
  canLogin: boolean = false;

  constructor(
    private http: HttpClient, 
    private storage: Storage
  ) {}

  authorize() {
    let authorizationUrl = "https://auth-test.flexforcemonkey.com/connect/authorize";
    let client_id = 'AppClient';
    let redirect_uri = window.location.origin + '/authorized';
    let response_type = 'code';
    let scope = 'openid profile roles apiScope';
    let nonce = 'N' + Math.random() + '' + Date.now();
    let state = Date.now() + '' + Math.random();

    this.storage.set('authNonce', nonce);
    this.storage.set('authStateControl', state);

    this.url = 
      authorizationUrl + '?' +
      'response_type=' + encodeURI(response_type) + '&' +
      "client_id=" + encodeURI(client_id) + "&" +
      "redirect_uri=" + encodeURI(redirect_uri) + "&" +
      "scope=" + encodeURI(scope) + "&" +
      "nonce=" + encodeURI(nonce) + "&" +
      "state=" + encodeURI(state);
  }

  login = () => {
    this.authorize();
    this.http.get(this.url).subscribe(data => console.log(data));
  }

  logout = () => {
    //this.oidcSecurityService.logoff();
  }

  registerMobileUser = (user: IUser): Observable<Partial<any>> => {
    return this.http.post(authUrl + "/RegisterMobileUser", user);
  }

  changePassword = (model: IChangePassword): Observable<Partial<any>> => {
    return this.http.post(authUrl + "/App/SelfService/ChangePassword", model);
  }

  forgotPassword = (model: IEmail): Observable<Partial<any>> => {
    return this.http.post(authUrl + "/SelfService/ForgotPassword", model);
  }

}
