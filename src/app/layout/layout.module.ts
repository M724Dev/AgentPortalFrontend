import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { RoleAuthGuard } from '../shared/guard/role-authguard';
import { EditAuthGuard } from '../shared/guard/edit-authguard';
import { CreateAuthGuard } from '../shared/guard/create-authguard';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent],
    providers: [RoleAuthGuard, EditAuthGuard, CreateAuthGuard]
})
export class LayoutModule {}
