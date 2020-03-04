import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from 'src/app/shared/services/registerUser.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  public isEdit: string;
  constructor(public service: RegisterUserService, public location: Location,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {
    this.service.update().subscribe(
      (res: any) => {
        // console.log(res);
        if (res.item2 !== true) {
          this.service.formModel2.reset();
          this.toastr.success('Update successful.');
          setInterval(() => { window.location.reload(); }, 1000);
        } else {
          this.toastr.error('Update unsuccessful.');
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
