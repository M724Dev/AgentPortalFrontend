import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AgentsubcreateRoutingModule } from './agentsubcreate-routing.module';
import { AgentsubcreateComponent } from './agentsubcreate.component';

@NgModule({
  declarations: [AgentsubcreateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AgentsubcreateRoutingModule
  ]
})
export class AgentsubcreateModule { }
