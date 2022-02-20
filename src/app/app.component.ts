import { Component } from '@angular/core';
import { Router, Event, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opened: boolean = false;
  currentUrl: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      if(event) {
        this.currentUrl = this.router.url;
      }
    });
  }

  openSideNav(): void {
    this.opened = !this.opened;
  }

}
