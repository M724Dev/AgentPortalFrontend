import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MerchantlistComponent } from './merchantlist.component';

const routes: Routes = [
    {
        path: '', component: MerchantlistComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MerchantListRoutingModule {
}
