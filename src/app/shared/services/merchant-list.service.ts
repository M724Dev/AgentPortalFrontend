import { Injectable } from '@angular/core';
import { MerchantDetail } from './merchant-list.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MerchantListService {
  formData = new MerchantDetail();
  list: MerchantDetail[];
   readonly rootURL = 'https://localhost:44333/api/Merchants';
   readonly getUrl = 'https://localhost:44333/api/Merchants/GetMerchantDetails';
  // readonly getUrl = 'http://192.168.70.10:80/SMSWeepayApi/api/Merchants/GetMerchantDetails';
  // readonly rootURL = 'http://192.168.70.10:80/SMSWeepayApi/api/Merchants';
  // readonly getUrl = 'http://192.168.70.10:80/SMSWeepayApiTest/api/Merchants/GetMerchantDetails';
  // readonly rootURL = 'http://192.168.70.10:80/SMSWeepayApiTest/api/Merchants';
  // readonly getUrl = 'https://sms.mobi724.com.ph/weepayapi/api/Merchants/GetMerchantDetails';
  // readonly rootURL = 'https://sms.mobi724.com.ph/weepayapi/api/Merchants';

  constructor(private http: HttpClient) { }

  postMerchantDetail(formData: MerchantDetail) {
    return this.http.post(this.rootURL + '/PostMerchantDetails', formData);
  }

  refreshList() {
    return this.http.get(this.getUrl);
  }

  putMerchantDetail(formData: MerchantDetail) {
    return this.http.post(this.rootURL + '/PutMerchantDetails', formData);
  }

  deleteMerchantDetail(id: number) {
    return this.http.post(this.rootURL + '/DeleteMerchantDetails', id);
  }
}
