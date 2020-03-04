import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTablesModule } from 'angular-datatables';
import { UserlistComponent } from './userlist.component';
import { UserListRoutingModule } from './userlist-routing.module';

@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule,
    DataTablesModule,
    UserListRoutingModule
  ]
})
export class UserlistModule { }
