import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgotpassword-routing.module';
import { FormsModule } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword.component';



@NgModule({
  declarations: [ForgotpasswordComponent],
  imports: [
    CommonModule,
    ForgotPasswordRoutingModule,
    FormsModule
  ]
})
export class ForgotpasswordModule { }
