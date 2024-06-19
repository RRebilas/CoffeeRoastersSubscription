import { BreakpointObserver } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { Link } from '../../../shared/data-access/models';

@Component({
  selector: 'crs-header',
  templateUrl: 'header.component.html',
  standalone: true,
  imports: [CommonModule, OverlayModule, MatIcon, RouterLink],
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
          rgba(255, 255, 255, 1) 75%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    `,
  ],
})
export class HeaderComponent {
  /**
   * @type Observable
   * Observable that tracks dimensions of window
   * and decides wheter to display hamburger menu icon or not
   */
  isSmallScreen$ = inject(BreakpointObserver)
    .observe('(max-width: 767.98px)')
    .pipe(
      map((state) => state.matches),
      tap((matching) => {
        if (!matching) this.isMenuOpen = false;
      }),
    );

  /**
   * @type boolean
   * attribute that tells, wheter to open overlay menu or not
   *
   * Set to false, if user open/closes menu manually,
   * or if screen goes wider and hamburger icon menu is being hidden
   */
  isMenuOpen: boolean = false;

  links: Link[] = [
    { content: 'Home', link: '/home' },
    { content: 'About us', link: '/about' },
    { content: 'Create your plan', link: '/plans/create' },
  ];
}
