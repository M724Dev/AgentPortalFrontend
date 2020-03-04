import { Injectable } from '@angular/core';
import { MerchantDetail } from './merchant-list.model';
import { MonitoringDetail } from './monitoring.model';
import { HttpClient } from '@angular/common/http';
import { FinancialMessageRequest } from './FinancialMessageRequest';

@Injectable({
  providedIn: 'root'
})
export class MonitoringServices {
  formData: MerchantDetail;
  fmRequest: FinancialMessageRequest;
  list: MerchantDetail[];
  list2: MonitoringDetail[];

  // readonly getUrl1 = 'http://192.168.70.10:80/SMSWeepayApi/api/Monitor/GetCurrentFinancialMessages';
  // readonly getDataUrl = 'http://192.168.70.10:80/SMSWeepayApi/api/Monitor/GetFinancialMessages';
   readonly getUrl1 = 'https://localhost:44333/api/Monitor/GetCurrentFinancialMessages';
   readonly getDataUrl = 'https://localhost:44333/api/Monitor/GetFinancialMessages';
  // readonly getUrl1 = 'http://192.168.70.10:80/SMSWeepayApiTest/api/Monitor/GetCurrentFinancialMessages';
  // readonly getDataUrl = 'http://192.168.70.10:80/SMSWeepayApiTest/api/Monitor/GetFinancialMessages';
  // readonly getUrl1 = 'https://sms.mobi724.com.ph/weepayapi/api/Monitor/GetCurrentFinancialMessages';
  // readonly getDataUrl = 'https://sms.mobi724.com.ph/weepayapi/api/Monitor/GetFinancialMessages';


  constructor(private http: HttpClient) { }

  refreshList1() {
    return this.http.get(this.getUrl1);
  }

  getFinancialMessage(dtfrom: string, dtTo: string) {
    var data = {
      dateFrom: dtfrom,
      dateTo: dtTo
    };
    return this.http.post(this.getDataUrl, data);
  }
}
