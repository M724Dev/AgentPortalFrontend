import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { MerchantlistComponent } from './merchantlist.component';
import { MerchantListRoutingModule } from './merchantlist-routing.module';

@NgModule({
  declarations: [MerchantlistComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    MerchantListRoutingModule
  ]
})
export class MerchantlistModule { }
