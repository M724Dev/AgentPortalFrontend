import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ChangePasswordRoutingModule } from './changepassword-routing.module';
import { ChangepasswordComponent } from './changepassword.component';

@NgModule({
  declarations: [ChangepasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ChangePasswordRoutingModule
  ]
})
export class ChangepasswordModule { }
