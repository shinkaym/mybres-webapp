import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './navbar-layout.component.html',
  styleUrl: './navbar-layout.component.scss'
})
  
export class NavbarLayoutComponent {
  routerSubscription: Subscription
  currentPage: string = "";

  constructor(private router: Router) { 
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (router.url.includes("championship")) {
          this.currentPage = "championship";
        }
        else {
          this.currentPage = "user";
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
