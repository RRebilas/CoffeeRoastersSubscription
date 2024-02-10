import { inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

export const initializeIcons = () => {
  addIcon('icon-coffee-beans', 'shared');
};

export const addIcon = (
  name: string,
  module: 'home' | 'about' | 'plan' | 'shared',
  device: 'desktop' | 'mobile' | 'tablet' = 'desktop'
) => {
  const iconRegistry = inject(MatIconRegistry);
  const sanitizer = inject(DomSanitizer);

  iconRegistry.addSvgIcon(
    name.replace('icon-', ''),
    sanitizer.bypassSecurityTrustResourceUrl(
      `../../../assets/images/${module}/${device}/${name}.svg`
    )
  );
};
