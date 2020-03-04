import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgentsubcreateComponent } from './agentsubcreate.component';

const routes: Routes = [
    {
        path: '', component: AgentsubcreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgentsubcreateRoutingModule {
}
