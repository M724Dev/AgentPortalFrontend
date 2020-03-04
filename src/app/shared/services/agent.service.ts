import { Injectable } from '@angular/core';
import { AgentDetail, MoaDetail, BankDetail, ContactInformation, AgentBranchesDetail, TerminalDetail } from './agent-list.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { debug } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AgentListService {
  formData = new AgentDetail();
  formDataMoa = new MoaDetail();
  formDataBank = new BankDetail();
  formDataContact = new ContactInformation();
  formDataAgentBranches = new AgentBranchesDetail();
  formDataTerminal = new TerminalDetail();
  list: AgentDetail[];
   readonly rootURL = 'https://localhost:44333/api/Agent';
   readonly getUrl = 'https://localhost:44333/api/Agent/GetAgents';
  // readonly getUrl = 'http://192.168.70.10:80/SMSWeepayApi/api/Merchants/GetMerchantDetails';
  // readonly rootURL = 'http://192.168.70.10:80/AgentPortalApi/api/Agent';
  // readonly getUrl = 'http://192.168.70.10:80/AgentPortalApi/api/Agent/GetAgents';
  // readonly rootURL = 'http://192.168.70.10:80/SMSWeepayApiTest/api/Merchants';
  // readonly getUrl = 'https://sms.mobi724.com.ph/weepayapi/api/Merchants/GetMerchantDetails';
  // readonly rootURL = 'https://sms.mobi724.com.ph/weepayapi/api/Merchants';

  constructor(public fb: FormBuilder, private http: HttpClient) { }

    register(body) {
      return this.http.post(this.rootURL + '/CreateAgent', body);
    }

    getSubAgents(masterAgentID) {
      return this.http.post(this.rootURL + '/GetSubAgents', masterAgentID);
    }

    getMasterAgentID(masterAgentID) {
      return this.http.post(this.rootURL + '/GetMasterAgentID', masterAgentID);
    }

    // update() {
    //     const body = {
    //         Username: this.formModel2.value.Username,
    //         FullName: this.formModel2.value.FullName,
    //         Email: this.formModel2.value.Email,
    //         RoleID: this.formModel2.value.Role,
    //         Id: this.formModel2.value.Id
    //     };
    //     return this.http.post(this.rootURL + '/UpdateAccount', body);
    // }

    getMasterAgent() {
        return this.http.get(this.rootURL + '/GetMasterAgents');
    }

    refreshList() {
        return this.http.get(this.rootURL + '/GetAgents');
    }

    putMerchantDetail(formData: AgentDetail) {
        return this.http.post(this.rootURL + '/UpdateAccount', formData);
    }

    deleteMerchantDetail(id: number) {
        return this.http.post(this.rootURL + '/DeleteAgent', id);
    }

}
