import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class RoleAuthGuard implements CanActivate {
    constructor(private router: Router) {}

    // canActivate() {
    //     if (localStorage.getItem('isLoggedin')) {
    //         return true;
    //     }

    //     this.router.navigate(['/login']);
    //     return false;
    // }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if (localStorage.getItem('item2') === '1') {
                return true;
            } else {
                this.router.navigate(['/monitoring']);
            }
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if (localStorage.getItem('edit') === 'true') {
                return true;
            } else {
                this.router.navigate(['/userlist']);
            }
    }
}
