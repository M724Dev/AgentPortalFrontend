import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { AgentRoutingModule } from './agent-routing.module';
import { AgentComponent } from './agent.component';

@NgModule({
  declarations: [AgentComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    AgentRoutingModule
  ]
})
export class AgentModule { }
