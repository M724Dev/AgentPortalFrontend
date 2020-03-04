import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RegisterUserDetail } from 'src/app/shared/services/registerUser.model';
import { RegisterUserService } from 'src/app/shared/services/registerUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public pushRightClass: string;
  public fullname: string;
  constructor(public router: Router, public service: RegisterUserService) {

    this.router.events.subscribe(val => {
        if (
            val instanceof NavigationEnd &&
            window.innerWidth <= 992 &&
            this.isToggled()
        ) {
            this.toggleSidebar();
        }
    });
}

  ngOnInit() {
    this.pushRightClass = 'push-right';
    this.fullname = localStorage.getItem('item3');
  }

  isToggled(): boolean {
    const dom: Element = document.querySelector('body');
    return dom.classList.contains(this.pushRightClass);
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle(this.pushRightClass);
  }

  rltAndLtr() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('rtl');
  }

  onLoggedout() {
    localStorage.removeItem('item1');
    localStorage.removeItem('item2');
    localStorage.removeItem('item3');
    localStorage.removeItem('item4');
    localStorage.removeItem('item5');
    localStorage.removeItem('dropdown');
    window.location.reload();
    this.router.navigate(['/login']);
  }
}
