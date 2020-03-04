import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterUserDetail } from './registerUser.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
    formData = new RegisterUserDetail();
    list: RegisterUserDetail[];
    public fullName: string;
    public userName: string;
     readonly rootURL = 'https://localhost:44333/api/Accounts';
    // readonly rootURL = 'http://192.168.70.10:80/AgentPortalApi/api/Accounts';
    // readonly rootURL = 'http://192.168.70.10:80/SMSWeepayApiTest/api/Accounts';
    // readonly rootURL = 'https://sms.mobi724.com.ph/weepayapi/api/Accounts';
    constructor(private fb: FormBuilder, private http: HttpClient) { }
    formModel = this.fb.group({
        RoleID: ['', Validators.required],
        FullName: ['', [Validators.required]],
        Email: ['', [Validators.email]],
        Username: ['', [Validators.required]],
        Passwords: this.fb.group({
            Password: ['', [Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
            ConfirmPassword: ['', [Validators.required]]
        }, { validators: this.comparePasswords})
    });

    formModel1 = this.fb.group({
        RoleID: [''],
        FullName: new FormControl({value: localStorage.getItem('item3'), disabled: true}),
        Email: new FormControl({value: localStorage.getItem('item5'), disabled: true}),
        Username: new FormControl({value: localStorage.getItem('item4'), disabled: true}),
        Passwords: this.fb.group({
            Password: ['', [Validators.required,
                Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{6,}')]],
            ConfirmPassword: ['', [Validators.required]]
        }, { validators: this.comparePasswords})
    });

    formModel2 = this.fb.group({
        RoleID: ['', Validators.required],
        FullName: ['', Validators.required],
        Email: ['', Validators.email],
        Username: ['', Validators.required],
        Id: [''],
    });

    comparePasswords(fb: FormGroup) {
        const confirmPswrdCtrl = fb.get('ConfirmPassword');
        if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors ) {
            if (fb.get('Password').value !== confirmPswrdCtrl.value) {
                confirmPswrdCtrl.setErrors({ passwordMismatch: true});
            } else {
                confirmPswrdCtrl.setErrors(null);
            }
        }
    }

    register() {
        const body = {
            Username: this.formModel.value.Username,
            Password: this.formModel.value.Passwords.Password,
            FullName: this.formModel.value.FullName,
            Email: this.formModel.value.Email,
            RoleID: this.formModel.value.RoleID
        };
        return this.http.post(this.rootURL + '/RegisterAccount', body);
    }

    update() {
        const body = {
            Username: this.formModel2.value.Username,
            FullName: this.formModel2.value.FullName,
            Email: this.formModel2.value.Email,
            RoleID: this.formModel2.value.Role,
            Id: this.formModel2.value.Id
        };
        return this.http.post(this.rootURL + '/UpdateAccount', body);
    }

    refreshList() {
        return this.http.get(this.rootURL + '/GetUserDetails');
    }

    putMerchantDetail(formData: RegisterUserDetail) {
        return this.http.post(this.rootURL + '/UpdateAccount', formData);
    }

    deleteMerchantDetail(id: number) {
        return this.http.post(this.rootURL + '/DeleteAccount', id);
    }

    changePassword() {
        const body = {
            Id: localStorage.getItem('item1'),
            Username: localStorage.getItem('item4'),
            Password: this.formModel1.value.Passwords.Password,
            FullName: localStorage.getItem('item3'),
            Email: localStorage.getItem('item5'),
            Roles: localStorage.getItem('item2')
        };
        // console.log(body);
        return this.http.post(this.rootURL + '/ChangePassword', body);
    }

}
