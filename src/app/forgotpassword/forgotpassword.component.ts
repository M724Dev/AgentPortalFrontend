import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from '../shared/services/accounts.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  formModel = {
    email: ''
  };

  constructor(public router: Router, public service: AccountsService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.service.changePass(form.value).subscribe(
      (res: any) => {
        // console.log(res);
        if (res === true) {
          this.toastr.success('Please check your email for your temporary password. Change your password immediately.');
          this.formModel = {
            email: '',
          };
          this.router.navigate(['/login']);
        }
      },
      err => {
        if (err.status === 400) {
          this.toastr.error('Account is not activated.');
        } else {
          // console.log(err);
        }
      }
    );
  }

}
