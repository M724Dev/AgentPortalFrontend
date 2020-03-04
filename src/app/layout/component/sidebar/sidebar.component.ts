import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public fullName: string;
    public userRole: string;
    public forAllbank: string;
    isActive: boolean;
    collapsed: boolean;
    showMenu: string;
    pushRightClass: string;
    dropDown: string;

    @Output() collapsedEvent = new EventEmitter<boolean>();

    constructor(public router: Router) {
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
        this.userRole = localStorage.getItem('item2');
        this.fullName = localStorage.getItem('item3');
        this.addExpandClass(localStorage.getItem('dropdown'));
        this.forAllbank = 'true';
    }

    refresh() {
        localStorage.removeItem('edit');
        this.refresh();
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        localStorage.removeItem('dropdown');
        localStorage.setItem('dropdown', element);
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
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
        window.location.reload();
        this.router.navigate(['/login']);
    }

}
