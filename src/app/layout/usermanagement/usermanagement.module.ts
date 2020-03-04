import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { UsermanagementComponent } from './usermanagement.component';

@NgModule({
  declarations: [UsermanagementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UsermanagementRoutingModule
  ]
})
export class UsermanagementModule { }
