import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'crs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class CardComponent {
  imgData = input.required<{ src: string; w: number; h: number }>();
  title = input.required<string>();
  description = input.required<string>();
  theme = input<'default' | 'number-based' | 'colored'>('default');
}
