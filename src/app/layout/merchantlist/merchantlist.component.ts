import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MerchantListService } from 'src/app/shared/services/merchant-list.service';
import { MerchantDetail } from 'src/app/shared/services/merchant-list.model';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from 'src/app/shared/services/accounts.service';

@Component({
  selector: 'app-merchantlist',
  templateUrl: './merchantlist.component.html',
  styleUrls: ['./merchantlist.component.scss']
})
export class MerchantlistComponent implements OnInit, OnDestroy {
  public list: MerchantDetail[] = [];
  public userRole: string;
  @ViewChild(DataTableDirective, {static: false} )
  dtElement: DataTableDirective;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(public service: MerchantListService, private toastr: ToastrService,
              private chref: ChangeDetectorRef, public acct: AccountsService) {
  }
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        responsive: true,
        ordering: false,
        dom: 'Clfrtip'
      };

      this.service.refreshList().subscribe((res: MerchantDetail[]) => {
        this.list = res;
        this.chref.detectChanges();
        this.dtTrigger.next();
        // console.log(this.list);
      });

      this.userRole = localStorage.getItem('item2');
    }

    ngOnDestroy() {
      this.dtTrigger.unsubscribe();
    }

    populateForm(mer: MerchantDetail) {
      this.service.formData = mer;
      // console.log(mer);
    }

    onDelete(id: number) {
      if (confirm('Are you sure you want to delete?')) {
        this.service.deleteMerchantDetail(id).subscribe(res => {
          this.service.refreshList().subscribe((res1: MerchantDetail[]) => {
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
