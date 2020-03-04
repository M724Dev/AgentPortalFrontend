import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from 'src/app/shared/services/registerUser.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {

  public isEdit: string;
  clicked: boolean;
  constructor(public service: RegisterUserService, public location: Location,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  actionMethod() {
    this.clicked = true;
  }

  onSubmit() {
    this.clicked = true;
    this.service.register().subscribe(
      (res: any) => {
        // console.log(res);
        if (res.item2 !== true) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
        } else {
          this.toastr.error('Username is already taken', 'Registration failed.');
        }
      },
      err => {
        // console.log(err);
      }
    );
  }

  cancel() {
    this.location.back();
    this.service.formModel.reset();
  }
}
