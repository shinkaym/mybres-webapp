import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss',
})
export class IntroComponent {
  intervalId: any = 0;

  public constructor() {
    this.runJavaScript();
  }

  @ViewChild('slo') slo!: ElementRef;

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  runJavaScript(): void {
    const ls = [
      'T',
      'h',
      'ể',
      ' ',
      't',
      'h',
      'a',
      'o',
      ' ',
      'k',
      'h',
      'ô',
      'n',
      'g',
      ' ',
      'b',
      'i',
      'ê',
      'n',
      ' ',
      'g',
      'i',
      'ớ',
      'i',
    ];

    this.intervalId = setInterval(() => {
      console.log('🚀 ~ IntroComponent ~ this.intervalId=setInterval ~ this.intervalId:', this.intervalId)
      let c = '';
      ls.forEach((l, i) => {
        setTimeout(() => {
          c = c.slice(0, -1) + l + (i == ls.length - 1 ? '' : '_');
          if (this.slo) {
            this.slo.nativeElement.innerHTML = c;
          }
        }, i * 40);
      });
    }, 2000);
    // });
  }
}
