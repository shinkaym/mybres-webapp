import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-championship-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './championship-layout.component.html',
  styleUrl: './championship-layout.component.scss'
})
export class ChampionshipLayoutComponent {

}
