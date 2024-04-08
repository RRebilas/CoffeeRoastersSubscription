import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { Link } from '../../../shared/data-access/models';

@Component({
  selector: 'crs-header',
  templateUrl: 'header.component.html',
  standalone: true,
  imports: [CommonModule, OverlayModule, MatIcon, AsyncPipe, RouterLink],
  styles: [
    `
      mat-icon.logo {
        width: 27px;
        height: 27px;
        font-size: 27px;
      }

      [svgIcon='hamburger'] {
        fill: #333d4b;
        width: 16px;
        height: 15px;
      }

      .example-list {
        $leftRightMargin: 3rem;
        width: calc(100svw - $leftRightMargin);
        height: 50svh;
        position: relative;
        z-index: 1000;
        background: linear-gradient(
          180deg,
          rgba(255, 255, 255, 1) 60%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    `,
  ],
})
export class HeaderComponent {
  isSmallScreen$ = inject(BreakpointObserver)
    .observe('(max-width: 767.98px)')
    .pipe(
      map((state) => state.matches),
      tap((matching) => {
        if (!matching) this.isMenuOpen = false;
      })
    );

  isMenuOpen: boolean = false;

  links: Link[] = [
    { content: 'Home', link: '/home' },
    { content: 'About us', link: '/about' },
    { content: 'Create your plan', link: '/plans/create' },
  ];
}
