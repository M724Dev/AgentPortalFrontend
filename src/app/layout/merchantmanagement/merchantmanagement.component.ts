import { Component, OnInit, OnDestroy } from '@angular/core';
import { MerchantListService } from 'src/app/shared/services/merchant-list.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-merchantmanagement',
  templateUrl: './merchantmanagement.component.html',
  styleUrls: ['./merchantmanagement.component.scss']
})
export class MerchantmanagementComponent implements OnInit, OnDestroy {
  mySubscription: any;
  constructor(public service: MerchantListService, private toastr: ToastrService,
              public router: Router, public location: Location) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  cancel() {
    this.location.back();
    this.service.formData = {
      id : null,
      masterMerchantID : '',
      merchantID : '',
      merchant_Name : '',
      address : '',
      dba : '',
      branch : '',
      depository_Branch : '',
      merchant_Category: '',
      fee_Type : '',
      fee : '',
      mgr : '',
      settlementAccountNumber : '',
      terminalID: '',
      terminal_Type: '',
      simcard_Telco: '',
      contact_Person: '',
      designation: '',
      contact_Number: '',
      report_Email: '',
      insertDT: '',
      insertUser: ''
    };
  }

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      id : null,
      masterMerchantID : '',
      merchantID : '',
      merchant_Name : '',
      address : '',
      dba : '',
      branch : '',
      depository_Branch : '',
      merchant_Category: '',
      fee_Type : '',
      fee : '',
      mgr : '',
      settlementAccountNumber : '',
      terminalID: '',
      terminal_Type: '',
      simcard_Telco: '',
      contact_Person: '',
      designation: '',
      contact_Number: '',
      report_Email: '',
      insertDT: '',
      insertUser: ''
    };
  }

  onSubmit(form: NgForm) {
    if (form.value.id == null) {
    this.insertRecord(form);
    } else {
    this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.postMerchantDetail(form.value).subscribe( res => {
      this.toastr.success('You have successfully registered.');
      this.resetform(form);
      setInterval(() => { this.refresh(); }, 1000);
    });
  }

  updateRecord(form: NgForm) {
    this.service.putMerchantDetail(form.value).subscribe( res => {
      this.toastr.info('Updated successfully.');
      this.resetform(form);
      setInterval(() => { this.refresh(); }, 1000);
    });
  }

  refresh(): void {
    window.location.reload();
  }

}

