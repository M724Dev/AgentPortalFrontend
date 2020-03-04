import { Component, OnInit } from '@angular/core';
import { AgentListService } from 'src/app/shared/services/agent.service';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
import { MasterAgent } from 'src/app/shared/services/agent-list.model';

@Component({
  selector: 'app-agentsubcreate',
  templateUrl: './agentsubcreate.component.html',
  styleUrls: ['./agentsubcreate.component.scss']
})
export class AgentsubcreateComponent implements OnInit {
  mySubscription: any;
  public list: MasterAgent[] = [];
  public agentForm: FormGroup;
  public authList: FormArray;
  public terminalList: FormArray;
  check: string;
  isHide: boolean;
  clicked: boolean;
  isHideSubAgent: boolean;
  body: FormGroup;
  get authFormGroup() {
    return this.agentForm.get('auth') as FormArray;
  }

  get terminalFormGroup() {
    return this.agentForm.get('terminal') as FormArray;
  }

  constructor(public service: AgentListService, private toastr: ToastrService,
              public location: Location, private fb: FormBuilder) { }

  ngOnInit() {
    this.agentForm = this.fb.group({
    user: [''],
    mastersubid1: ['', Validators.required],
    mastersubid: ['', Validators.required],
    masteridlist: [''],
    lastname: ['', Validators.required],
    firstname: ['', Validators.required],
    middlename: ['', Validators.required],
    iscorpname: [''],
    corpname: [''],
    ismerchcategory: [''],
    merchcategory: [''],
    isbusinessname: [''],
    businessname: [''],
    phoneno: ['', Validators.required],
    streetno: ['', Validators.required],
    town: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    postalcode: ['', Validators.required],
    comptin: ['', Validators.required],
    ctcno: ['', Validators.required],
    auth: this.fb.array([this.createAuth()]),
    noofagent: [''],
    terminal: this.fb.array([this.createTerminal()]),
    clastname: ['', Validators.required],
    cfirstname: ['', Validators.required],
    cmiddlename: ['', Validators.required],
    cdesignation: ['', Validators.required],
    cdepartment: ['', Validators.required],
    ccontactno: ['', Validators.required],
    cfaxno: ['', Validators.required],
    cemailadd: ['', Validators.required],
    cbilllname: ['', Validators.required],
    cbillfname: ['', Validators.required],
    cbillmname: ['', Validators.required],
    cbillcontactno: ['', Validators.required],
    depbank: ['', Validators.required],
    bstreetno: ['', Validators.required],
    btown: ['', Validators.required],
    bcity: ['', Validators.required],
    bcountry: ['', Validators.required],
    bpostalcode: ['', Validators.required],
    bankaccname: ['', Validators.required],
    rbotype: ['', Validators.required],
    rbolastname: ['', Validators.required],
    rbofirstname: ['', Validators.required],
    rbomiddlename: ['', Validators.required],
    rboemailadd: ['', Validators.required],
    rbocontactno: ['', Validators.required],
    });
    this.agentForm.reset();
    this.authList = this.agentForm.get('auth') as FormArray;
    this.terminalList = this.agentForm.get('terminal') as FormArray;
    this.agentForm.controls.corpname.disable();
    this.agentForm.controls.merchcategory.disable();
    this.agentForm.controls.businessname.disable();
    this.agentForm.controls.mastersubid1.disable();
    this.agentForm.controls.terminal.disable();
    this.agentForm.controls.noofagent.disable();
  }

  changedFieldTypecn() {
    if (this.agentForm.controls.iscorpname.value === false) {
      this.agentForm.controls.corpname.disable();
      this.agentForm.controls.corpname.reset();
    } else {
      this.agentForm.controls.corpname.enable();
    }
  }

  changedFieldTypemc() {
    if (this.agentForm.controls.ismerchcategory.value === false) {
      this.agentForm.controls.merchcategory.disable();
      this.agentForm.controls.merchcategory.reset();
    } else {
      this.agentForm.controls.merchcategory.enable();
    }
  }

  changedFieldTypebn() {
    if (this.agentForm.controls.isbusinessname.value === false) {
      this.agentForm.controls.businessname.disable();
      this.agentForm.controls.businessname.reset();
    } else {
      this.agentForm.controls.businessname.enable();
    }
  }

  removeAuth(index) {
    this.authList.removeAt(index);
  }

  removeTerminal(index) {
    this.terminalList.removeAt(index);
  }

  cancel() {
    this.location.back();
    this.location.back();
    this.agentForm.reset();
  }

  createTerminal(): FormGroup {
    return this.fb.group({
      terminalname: [''],
      terminaltype: ['']
    });
  }

  createAuth(): FormGroup {
    return this.fb.group({
      authlastname: [''],
      authfirstname: [''],
      authmiddlename: [''],
      authdesignation: [''],
      valididtype: [''],
      vallididno: [''],
      valididexpdate: ['']
    });
  }

  addAuthFormGroup(): FormGroup {
    return this.fb.group({
      authlastname: [''],
      authfirstname: [''],
      authmiddlename: [''],
      authdesignation: [''],
      valididtype: [''],
      vallididno: [''],
      valididexpdate: ['']
    });
  }

  addTerminalFormGroup(): FormGroup {
    return this.fb.group({
      terminalname: [''],
      terminaltype: ['']
    });
  }

  addNew(): void {
    (this.agentForm.get('auth') as FormArray).push(this.addAuthFormGroup());
  }

  addNewTerminal(): void {
    (this.agentForm.get('terminal') as FormArray).push(this.addTerminalFormGroup());
  }

  onSubmit() {
    this.clicked = true;
    console.log(this.agentForm.value);
    this.agentForm.controls.user.setValue(localStorage.getItem('item4'));
    this.body = this.agentForm.value;
    this.service.register(this.body).subscribe(
      (res: any) => {
        // console.log(res);
        if (res.item2 !== true) {
          this.agentForm.reset();
          this.toastr.success('New agent created!', 'Registration successful.');
          setInterval(() => { this.refresh(); }, 2000);
        } else {
          this.toastr.error('Registration failed.');
        }
      },
      err => {
        // console.log(err);
      }
    );
  }

  refresh(): void {
    window.location.reload();
  }
}
