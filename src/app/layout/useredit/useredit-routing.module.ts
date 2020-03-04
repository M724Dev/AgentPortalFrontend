import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsereditComponent } from './useredit.component';

const routes: Routes = [
    {
        path: '', component: UsereditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserEditRoutingModule {
}
