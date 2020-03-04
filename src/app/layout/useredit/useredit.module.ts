import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserEditRoutingModule } from './useredit-routing.module';
import { UsereditComponent } from './useredit.component';

@NgModule({
  declarations: [UsereditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    UserEditRoutingModule
  ]
})
export class UsereditModule { }
