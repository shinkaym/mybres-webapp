import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {
  routerSubscription: Subscription
  currentUserPage: string = "profile";

  constructor(private router: Router) {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (router.url) {
          case "/profile": {
            this.currentUserPage = "profile";
            break;
          }
          case "/activity": {
            this.currentUserPage = "activity";
            break;
          }
          case "/group": {
            this.currentUserPage = "group";
            break;
          }
          case "/partner": {
            this.currentUserPage = "partner";
            break;
          }
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
