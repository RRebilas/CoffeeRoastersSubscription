import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UICard } from '@app/shared/data-access/models/card.interface';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { CardComponent } from '../../shared/ui/card/card.component';

@Component({
  selector: 'crs-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: `
    .collection {
      h3 {
        background: -webkit-linear-gradient(#83888f, #fefcf7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .perks {
      background: linear-gradient(to bottom, #2c343e 60%, transparent 60%);
    }
  `,
  imports: [CommonModule, ButtonComponent, CardComponent],
})
export class HomeComponent {
  coffeeCards: UICard[] = [
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
  perksCards: UICard[] = [
    {
      title: 'Best quality',
      src: 'assets/images/home/desktop/icon-coffee-bean.svg',
      description:
        'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
    },
    {
      title: 'Exclusive benefits',
      src: 'assets/images/home/desktop/icon-gift.svg',
      description:
        'Special offers and swag when you subscribe, including 30% off your first shipment.',
    },
    {
      title: 'Free shipping',
      src: 'assets/images/home/desktop/icon-truck.svg',
      description:
        'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
    },
  ];
}
