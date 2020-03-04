import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { RoleAuthGuard } from '../shared/guard/role-authguard';
import { EditAuthGuard } from '../shared/guard/edit-authguard';
import { CreateAuthGuard } from '../shared/guard/create-authguard';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'monitoring', pathMatch: 'prefix' },
            { path: 'monitoring', loadChildren: () => import('./monitoring/monitoring.module').then(m => m.MonitoringModule) },
            { path: 'agentlist', loadChildren: () => import('./agent/agent.module').then(m => m.AgentModule) },
            { path: 'agentmanagement', loadChildren: () => import
            ('./agentmanagement/agentmanagement.module').then(m => m.AgentManagmentModule) },
            { path: 'subagent', loadChildren: () => import
            ('./agentsubcreate/agentsubcreate.module').then(m => m.AgentsubcreateModule), canActivate: [CreateAuthGuard] },
            { path: 'merchantlist', loadChildren: () => import('./merchantlist/merchantlist.module').then(m => m.MerchantlistModule) },
            { path: 'merchantmanagement', loadChildren: () => import
            ('./merchantmanagement/merchantmanagement.module').then(m => m.MerchantmanagementModule) },
            { path: 'createuser', loadChildren: () => import
            ('./usermanagement/usermanagement.module').then(m => m.UsermanagementModule), canActivate: [RoleAuthGuard] },
            { path: 'changepassword', loadChildren: () => import
            ('./changepassword/changepassword.module').then(m => m.ChangepasswordModule) },
            { path: 'userlist', loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistModule) },
            { path: 'edituser', loadChildren: () => import
            ('./useredit/useredit.module').then(m => m.UsereditModule), canActivate: [EditAuthGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
