import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-previous-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './previous-layout.component.html',
  styleUrl: './previous-layout.component.scss',
})
export class PreviousLayoutComponent {
  headerTitle: string = '';
  routeSub: Subscription;

  constructor(private router: Router) {
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch (router.url) {
          case '/login': {
            this.headerTitle = 'Đăng nhập';
            break;
          }
          case '/register': {
            this.headerTitle = 'Tham gia cộng đồng';
            break;
          }
          case '/forgot-password': {
            this.headerTitle = 'Quên mật khẩu';
            break;
          }
          default:
            break;
        }
      }
    });
  }
}
