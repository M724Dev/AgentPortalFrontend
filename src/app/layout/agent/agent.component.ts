import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AgentDetail } from 'src/app/shared/services/agent-list.model';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { RegisterUserService } from 'src/app/shared/services/registerUser.service';
import { ToastrService } from 'ngx-toastr';
import { AccountsService } from 'src/app/shared/services/accounts.service';
import { RegisterUserDetail } from 'src/app/shared/services/registerUser.model';
import { AgentListService } from 'src/app/shared/services/agent.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit {
  public list: AgentDetail[] = [];
  public sublist: AgentDetail[] = [];
  public userRole: string;
  public roleName: string;
  public masterAgentID: string;
  public agentType: any;
  @ViewChild(DataTableDirective, {static: false} )
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  dtElement1: DataTableDirective;
  dtOptions1: DataTables.Settings = {};
  dtTrigger1: Subject<any> = new Subject();
  modalContent: undefined;
  constructor(public service: AgentListService, private toastr: ToastrService,
              private chref: ChangeDetectorRef, public acct: AccountsService, private modalService: NgbModal) {
  }
    ngOnInit() {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        responsive: true,
        ordering: false
      };

      this.service.refreshList().subscribe((res: AgentDetail[]) => {
        console.log(res);
        this.list = res;
        this.chref.detectChanges();
        this.dtTrigger.next();
      });

      this.agentType = {
      };
      this.userRole = localStorage.getItem('item2');
    }

    // tslint:disable-next-line:ban-types
    getAgentCode(code: number): String {
      if (code === 0) {
        return 'Master Agent';
      } else {
        return 'Sub Agent';
      }
    }

    createSubAgent() {
      this.service.formData.masterAgentCodeID = localStorage.getItem('subagentID');
      this.service.formData.mastersubid = 2;
      console.log(this.service.formData);
    }

    openData(content, content1, mer) {
      console.log(mer);
      localStorage.setItem('subagentID', mer.masterAgentCodeID);
      if (mer.subAgentCodeID === 0) {
        this.getSubAgents(mer.masterAgentCodeID);
        this.modalContent = mer;
        this.modalService.open(content, { scrollable: true, size: 'lg' });
      } else {
        this.getMasterAgentID(mer.masterAgentCodeID);
        this.modalContent = mer;
        this.modalService.open(content1, { scrollable: true, size: 'lg' });
      }
    }

    getMasterAgentID(masterAgentID) {
      this.dtOptions1 = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        responsive: true,
        ordering: false
      };
      this.service.getMasterAgentID(masterAgentID).subscribe((res: AgentDetail[]) => {
        console.log(res);
        this.sublist = res;
        this.chref.detectChanges();
        this.dtTrigger1.next();
      });
    }

    getSubAgents(masterAgentID) {
      this.dtOptions1 = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        responsive: true,
        ordering: false
      };
      this.service.getSubAgents(masterAgentID).subscribe((res: AgentDetail[]) => {
        console.log(res);
        this.sublist = res;
        this.chref.detectChanges();
        this.dtTrigger1.next();
      });
    }

    populateForm(agent: AgentDetail, isEdit: string) {
      this.service.formData = agent;
      if (isEdit === 'true') {
        localStorage.setItem('isEdit', 'true');
      }
      console.log(agent);
    }

    onDelete(id: number) {
      if (confirm('Are you sure you want to delete?')) {
        this.service.deleteMerchantDetail(id).subscribe(res => {
          this.service.refreshList().subscribe((res1: AgentDetail[]) => {
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

}
