import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { MonitoringRoutingModule } from './monitoring-routing.module';

import { MonitoringComponent } from './monitoring.component';

@NgModule({
  declarations: [MonitoringComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule,
    MonitoringRoutingModule
  ],
  providers: [DatePipe]
})
export class MonitoringModule { }
