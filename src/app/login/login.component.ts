import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../shared/services/accounts.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formModel = {
    username: '',
    password: ''
  };
  constructor(public router: Router, public service: AccountsService, private toastr: ToastrService) { }

  ngOnInit() {
    if (localStorage.getItem('item2') != null) {
      this.router.navigateByUrl('/monitoring');
    }
  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('item2', res.item2.roleID);
        localStorage.setItem('item3', res.item2.fullName);
        localStorage.setItem('item5', res.item2.email);
        localStorage.setItem('item4', res.item2.username);
        localStorage.setItem('item1', res.item2.id);
        localStorage.setItem('item6', res.item2.isChanged);
        localStorage.setItem('forAllBank', 'true');
        localStorage.setItem('dropdown', 'pages1');
        if (res.item2.isActive === true) {
          if (res.item2.isChanged === true) {
            this.router.navigateByUrl('/changepassword');
            this.toastr.warning('Please change your password.');
          } else {
            this.router.navigateByUrl('/monitoring');
          }
        } else {
          this.toastr.error('Account is not activated.');
        }
      },
      err => {
        if (err.status === 400) {
          this.toastr.error('Incorrect username or Password.');
        } else {
          // console.log(err);
        }
      }
    );
  }

}
