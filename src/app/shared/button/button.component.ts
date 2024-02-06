import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'crs-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {
  @Input({ required: true }) label: string;
}
