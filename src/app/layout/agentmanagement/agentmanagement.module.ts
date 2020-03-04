import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AgentManagementRoutingModule } from './agentmanagement-routing.module';
import { AgentmanagementComponent } from './agentmanagement.component';

@NgModule({
  declarations: [AgentmanagementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AgentManagementRoutingModule
  ]
})
export class AgentManagmentModule { }
