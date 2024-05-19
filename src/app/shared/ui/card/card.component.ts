import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'crs-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  imgSrc = input.required<string>();
  title = input.required<string>();
  description = input.required<string>();
}
