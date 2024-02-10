import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'crs-footer',
  standalone: true,
  imports: [MatIcon, NgTemplateOutlet],
  templateUrl: './footer.component.html',
  styles: `mat-icon {width: 27px; height: 27px; font-size: 27px}`,
})
export class FooterComponent {
  links: Link[] = [
    {
      name: 'home',
      url: '',
    },
    {
      name: 'about us',
      url: '',
    },
    {
      name: 'create your plan',
      url: '',
    },
  ];

  icons = ['facebook', 'instagram', 'twitter'];
}

type Link = {
  name: string;
  url: string;
};
