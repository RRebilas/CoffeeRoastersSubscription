import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  booleanAttribute,
} from '@angular/core';

@Component({
  selector: 'crs-select-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './select-option.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOptionComponent {
  @Input({ required: true }) option: string;
  @Input({ required: true }) optionLabel: string;
  @Input({ required: true }) description: string;
  @Input({ transform: booleanAttribute }) selected: boolean = false;
}
