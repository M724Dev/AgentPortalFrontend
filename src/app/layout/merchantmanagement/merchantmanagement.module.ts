import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MerchantmanagementComponent } from './merchantmanagement.component';
import { MerchantmanagementRoutingModule } from './merchantmanagement-routing.module';


@NgModule({
  declarations: [MerchantmanagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    MerchantmanagementRoutingModule
  ]
})
export class MerchantmanagementModule { }
