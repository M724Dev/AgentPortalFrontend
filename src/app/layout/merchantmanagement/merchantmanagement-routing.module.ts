import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantmanagementComponent } from './merchantmanagement.component';

const routes: Routes = [
    {
        path: '', component: MerchantmanagementComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MerchantmanagementRoutingModule {
}
