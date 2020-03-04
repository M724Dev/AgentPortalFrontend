import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/guard';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
import { BnNgIdleService } from 'bn-ng-idle';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot(),
    NgbDropdownModule,
    NgbModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard, BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
