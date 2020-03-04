import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { RegisterUserService } from 'src/app/shared/services/registerUser.service';
import { RegisterUserDetail } from 'src/app/shared/services/registerUser.model';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit, OnDestroy {
  public list: RegisterUserDetail[] = [];
  public userRole: string;
  public roleName: string;
  public myMap: any;
  @ViewChild(DataTableDirective, {static: false} )
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(public service: RegisterUserService, private toastr: ToastrService,
              private chref: ChangeDetectorRef, public acct: AccountsService) {
  }
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        responsive: true,
        ordering: false
      };

      this.service.refreshList().subscribe((res: RegisterUserDetail[]) => {
        this.list = res;
        this.chref.detectChanges();
        this.dtTrigger.next();
      });

      this.myMap = {
        1: 'Admin',
        2: 'User'
      };

      this.userRole = localStorage.getItem('item2');
    }
    ngOnDestroy() {
      this.dtTrigger.unsubscribe();
    }

    populateForm(user: RegisterUserDetail, isEdit: string) {
      this.service.formData = user;
      if (isEdit === 'true') {
        localStorage.setItem('isEdit', 'true');
      }
      console.log(user);
    }

    onDelete(id: number) {
      if (confirm('Are you sure you want to delete?')) {
        this.service.deleteMerchantDetail(id).subscribe(res => {
          this.service.refreshList().subscribe((res1: RegisterUserDetail[]) => {
            this.list = res1;
            // console.log(this.list);
          });
          // this.rerender();
          this.toastr.warning('Deleted successfully.');
          setInterval(() => { this.refresh(); }, 1000);
        });
      }
    }

    refresh(): void {
      window.location.reload();
    }

    rerender() {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.dtOptions = {
          pagingType: 'full_numbers',
          pageLength: 10,
          processing: true,
          responsive: true,
      };
        this.dtTrigger.next();
        // console.log(this.list);
     });
    }
}
