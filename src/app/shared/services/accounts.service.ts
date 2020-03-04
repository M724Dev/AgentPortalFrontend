import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { disableDebugTools } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http: HttpClient) { }
   readonly rootURL = 'https://localhost:44333/api/Accounts';
  // readonly rootURL = 'http://192.168.70.10:80/AgentPortalApi/api/Accounts';
  // readonly rootURL = 'http://192.168.70.10:80/SMSWeepayApiTest/api/Accounts';
  // readonly rootURL = 'https://sms.mobi724.com.ph/weepayapi/api/Accounts';
  // tslint:disable-next-line:no-inferrable-types
  public loginStatus: boolean = false;
  public userName: string;
  public userRole: string;

  login(formData) {
    return this.http.post(this.rootURL + '/LoginAccount', formData);
  }
  changePass(formData) {
    return this.http.post(this.rootURL + '/PasswordReset', formData);
  }
}
