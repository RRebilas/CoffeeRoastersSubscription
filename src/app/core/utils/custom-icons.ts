import { inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const initializeIcons = () => {
  addIcon('icon-coffee-beans', 'shared');
  addIcon('logo', 'shared');
  addIcon('icon-facebook', 'shared');
  addIcon('icon-instagram', 'shared');
  addIcon('icon-twitter', 'shared');
  addIcon('icon-hamburger', 'shared', 'mobile');
  addIcon('icon-close', 'shared', 'mobile');
  addIcon('icon-arrow', 'plan', 'desktop');
};

export const addIcon = (
  name: string,
  module: 'home' | 'about' | 'plan' | 'shared',
  device: 'desktop' | 'mobile' | 'tablet' = 'desktop',
) => {
  const iconRegistry = inject(MatIconRegistry);
  const sanitizer = inject(DomSanitizer);

  iconRegistry.addSvgIcon(
    name.replace('icon-', ''),
    sanitizer.bypassSecurityTrustResourceUrl(
      `../../../assets/images/${module}/${device}/${name}.svg`,
    ),
  );
};
