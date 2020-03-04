import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorisedSideNavService {
  hideSideNav: boolean;

  constructor() { }

  toggleSideNav(): void {
    this.hideSideNav = !this.hideSideNav;
  }
}
