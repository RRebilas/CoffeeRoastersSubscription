import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
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
  /**
   * @type string
   * uniquely identify option from others
   */
  @Input({ required: true }) id: string;
  @Input({ required: true }) optionLabel: string;
  @Input({ required: true }) description: string;
  @Input({ transform: booleanAttribute }) selected: boolean = false;

  @Output() select: EventEmitter<string> = new EventEmitter();
}
