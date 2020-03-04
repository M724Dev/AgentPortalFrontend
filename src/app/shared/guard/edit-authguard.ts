import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class EditAuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
            if (localStorage.getItem('isEdit') === 'true') {
                localStorage.removeItem('isEdit');
                return true;
            } else {
                this.router.navigate(['/userlist']);
        }
    }
}
