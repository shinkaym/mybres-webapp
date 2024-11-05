import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './navbar-layout.component.html',
  styleUrl: './navbar-layout.component.scss'
})
  
export class NavbarLayoutComponent {

}
