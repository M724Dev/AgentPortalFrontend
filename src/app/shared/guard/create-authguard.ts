import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class CreateAuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if (localStorage.getItem('subagentID') !== null) {
                localStorage.removeItem('subagentID');
                return true;
            } else {
                this.router.navigate(['/agentlist']);
        }
    }
}
