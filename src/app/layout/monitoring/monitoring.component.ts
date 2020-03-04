import { Component, OnInit, ViewChild } from '@angular/core';
import { MonitoringServices } from 'src/app/shared/services/monitoring.service';
import { MonitoringDetail } from 'src/app/shared/services/monitoring.model';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
  date: Date = new Date();
  To: string;
  From: string;
  fDate: string;
  public listTemp: number[] = [];
  public list: MonitoringDetail[] = [];
  @ViewChild(DataTableDirective, {static: false} )
  dtElement: DataTableDirective;
  dtOptions1: any = {};
  dtTrigger1: Subject<any> = new Subject();
  modalContent: undefined;
  selectedRow;
  constructor(public service: MonitoringServices, private modalService: NgbModal,
              public datepipe: DatePipe) { }

  onKey(param, param1) { // without type info
    // console.log('test');
    if (param.length > 0 && param1.length > 0) {
          param += ' 00:00';
          param1 += ' 23:59';
          this.service.getFinancialMessage(param, param1).subscribe((res: MonitoringDetail[]) => {
            this.list = res;
            this.rerender();
          });
    }
  }

  getColor(responceCodeText) {
    switch (responceCodeText) {
      case 'APPROVED':
        return '#5cb85c';
      case 'TIMED OUT':
        return '#d9534f';
      case '':
        return 'none';
      default:
        return '#f0ad4e';
    }
  }

  filterDate(fDate) {
    if (fDate === 'yesterday') {
      const dte = new Date();
      dte.setDate(dte.getDate() - 1);
      this.To = dte.toISOString().substr(0, 10);
      this.From = dte.toISOString().substr(0, 10);
    } else if (fDate === 'thisweek') {
      const curr = new Date();
      const first = curr.getDate() - curr.getDay();
      const last = first + 6;
      const firstday = new Date(curr.setDate(first)).toUTCString();
      const lastday = new Date(curr.setDate(last)).toUTCString();
      const finalFirstDay = this.datepipe.transform(firstday, 'yyyy-MM-dd');
      const finalLastDay = this.datepipe.transform(lastday, 'yyyy-MM-dd');
      this.From = finalFirstDay;
      this.To = finalLastDay;
    } else if (fDate === 'lastweek') {
      const curr = new Date();
      // console.log(curr.getDate());
      // console.log(curr.getDay());
      const first = (curr.getDate() - 7) - curr.getDay();
      const last = first + 6;
      const firstday = new Date(curr.setDate(first)).toUTCString();
      const lastday = new Date(curr.setDate(last)).toUTCString();
      const finalFirstDay = this.datepipe.transform(firstday, 'yyyy-MM-dd');
      const finalLastDay = this.datepipe.transform(lastday, 'yyyy-MM-dd');
      this.From = finalFirstDay;
      this.To = finalLastDay;
    } else if (fDate === 'thismonth') {
      const firstdte = new Date();
      const lastdte = new Date();
      const firstDayOfMonth = new Date(firstdte.getFullYear(), firstdte.getMonth());
      const lastDayOfMonth = new Date(lastdte.getFullYear(), lastdte.getMonth() + 1, 0, 23, 59, 59);
      const finalFirstDate = this.datepipe.transform(firstDayOfMonth, 'yyyy-MM-dd');
      this.From = finalFirstDate;
      this.To = lastDayOfMonth.toISOString().substr(0, 10);
    } else if (fDate === 'lastmonth') {
      const firstdte = new Date();
      const lastdte = new Date();
      const firstDayOfMonth = new Date(firstdte.getFullYear(), firstdte.getMonth() - 1);
      const lastDayOfMonth = new Date(lastdte.getFullYear(), lastdte.getMonth(), 0, 23, 59, 59);
      const finalFirstDate = this.datepipe.transform(firstDayOfMonth, 'yyyy-MM-dd');
      this.From = finalFirstDate;
      this.To = lastDayOfMonth.toISOString().substr(0, 10);
    }
  }

  rerender() {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtOptions1 = {
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        responsive: true,
        deferLoading: 5,
        order: [[0, 'desc']],
        dom: 'fBrtip',
        columnDefs: [
          {
              targets: [ 1 ], visible: false, searchable: false
          },
          {
              targets: [ 4 ], visible: false, searchable: false
          },
          {
              targets: [ 12 ], visible: false, searchable: false
          },
          {
              targets: [ 13 ], visible: false, searchable: false
          },
          {
              targets: [ 14 ], visible: false, searchable: false
          },
          {
              targets: [ 15 ], visible: false, searchable: false
          },
          {
              targets: [ 16 ], visible: false, searchable: false
          },
          {
              targets: [ 17 ], visible: false, searchable: false
          },
        ],
        buttons: [{
                          extend:    'copyHtml5',
                          text:      '<i class="fa fa-copy"></i>',
                          titleAttr: 'Copy',
                          className: 'btn btn-primary'
                      },
                      {
                          extend:    'excelHtml5',
                          text:      '<i class="fa fa-file-excel-o"></i>',
                          titleAttr: 'Excel',
                          className: 'btn btn-primary'
                      },
                      {
                          extend:    'csvHtml5',
                          text:      '<i class="fa fa-file-text"></i>',
                          titleAttr: 'CSV',
                          className: 'btn btn-primary',
                          backgroundColor: '#20145A'
                      },
                      {
                          extend:    'print',
                          text:      '<i class="fa fa-print"></i>',
                          titleAttr: 'Print',
                          className: 'btn btn-primary'
                      }]
    };
      this.dtTrigger1.next();
      // console.log(this.list);
   });
  }

  openData(content, mer) {
    // console.log(mer);
    this.modalContent = mer;
    this.modalService.open(content, { scrollable: true, size: 'lg' });
    this.selectedRow = {Amount: mer.amount, Bin: mer.bin, Code: mer.code, ConnectorName: mer.connectorName,
                          Entry_Mode: mer.entry_Mode, insert_DateTime: mer.insert_DateTime, merchant: mer.merchant,
                          message_Mode: mer.message_Mode, message_Type: mer.message_Type, ori_RefNo: mer.ori_RefNo,
                          phid: mer.phid, piN_Mode: mer.piN_Mode, refNo: mer.refNo, responceCodeText: mer.responceCodeText,
                          response: mer.response, serial_No: mer.serial_No, stan: mer.stan, terminal: mer.terminal,
                          terminal_Type: mer.terminal_Type, Trx_Type: mer.trx_Type};
    // console.log(this.modalContent);
    // console.log(this.selectedRow);
  }

  ngOnInit() {
    this.To = this.date.toISOString().substr(0, 10);
    this.dtOptions1 = {
            pagingType: 'full_numbers',
            pageLength: 10,
            processing: true,
            responsive: true,
            deferLoading: 5,
            order: [[0, 'desc']],
            dom: 'fBrtip',
            columnDefs: [
              {
                  targets: [ 1 ], visible: false, searchable: false
              },
              {
                  targets: [ 4 ], visible: false, searchable: false
              },
              {
                  targets: [ 12 ], visible: false, searchable: false
              },
              {
                  targets: [ 13 ], visible: false, searchable: false
              },
              {
                  targets: [ 14 ], visible: false, searchable: false
              },
              {
                  targets: [ 15 ], visible: false, searchable: false
              },
              {
                  targets: [ 16 ], visible: false, searchable: false
              },
              {
                  targets: [ 17 ], visible: false, searchable: false
              },
            ],
            buttons: [{
                          extend:    'copyHtml5',
                          text:      '<i class="fa fa-copy"></i>',
                          titleAttr: 'Copy',
                          className: 'btn btn-primary'
                      },
                      {
                          extend:    'excelHtml5',
                          text:      '<i class="fa fa-file-excel-o"></i>',
                          titleAttr: 'Excel',
                          className: 'btn btn-primary'
                      },
                      {
                          extend:    'csvHtml5',
                          text:      '<i class="fa fa-file-text"></i>',
                          titleAttr: 'CSV',
                          className: 'btn btn-primary',
                          backgroundColor: '#20145A'
                      },
                      {
                          extend:    'print',
                          text:      '<i class="fa fa-print"></i>',
                          titleAttr: 'Print',
                          className: 'btn btn-primary'
                      }]
      };

    this.listTemp = [1, 2, 3];

    this.service.refreshList1().subscribe((res: MonitoringDetail[]) => {
        this.list = res;
        this.dtTrigger1.next();
        // console.log(this.list);
      });
  }
}
