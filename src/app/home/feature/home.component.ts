import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'crs-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: `
    h3 {
      background: -webkit-linear-gradient(#83888f, #fefcf7);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
  imports: [CommonModule, ButtonComponent, CardComponent],
})
export class HomeComponent {
  coffeeCards: { title: string; src: string; description: string }[] = [
    {
      title: 'Gran Espresso',
      src: 'assets/images/home/desktop/image-gran-espresso.png',
      description:
        'Light and flavorful blend with cocoa and black pepper for an intense experience',
    },
    {
      title: 'Planalto',
      src: 'assets/images/home/desktop/image-planalto.png',
      description:
        'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
    },
    {
      title: 'Piccolo',
      src: 'assets/images/home/desktop/image-piccollo.png',
      description:
        'Mild and smooth blend featuring notes of toasted almond and dried cherry ',
    },
    {
      title: 'Planalto',
      src: 'assets/images/home/desktop/image-danche.png',
      description:
        'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
    },
  ];
}
