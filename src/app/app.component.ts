import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private bnIdle: BnNgIdleService) {
    this.bnIdle.startWatching(6000).subscribe((res) => {
      if (res) {
        localStorage.removeItem('item2');
        // console.log('session expired');
      }
    });
  }

    ngOnInit() {
    }
}
