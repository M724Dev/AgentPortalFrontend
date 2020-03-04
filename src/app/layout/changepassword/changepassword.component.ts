import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from 'src/app/shared/services/registerUser.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  constructor(public service: RegisterUserService, public location: Location,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.changePassword().subscribe(
      (res: any) => {
        // console.log(res);
        if (res.item2 !== true) {
          this.toastr.success('Your Password has been changed successfully.');
          setInterval(() => { window.location.reload(); }, 1000);
        } else {
          this.toastr.error('Password changed unsuccessfully');
        }
      },
      err => {
        // console.log(err);
      }
    );
  }

  cancel() {
    this.location.back();
  }
}
