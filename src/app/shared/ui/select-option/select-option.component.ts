import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  input,
  output,
} from '@angular/core';
import inputBooleanTransform from '@app/shared/utils/input-boolean-transform';

@Component({
  selector: 'crs-select-option',
  standalone: true,
  imports: [NgClass],
  templateUrl: './select-option.component.html',
  styles: `
    :host {
      flex: 1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectOptionComponent {
  /**
   * uniquely identify option from others
   */
  id = input.required<string>();
  optionLabel = input.required<string>();
  description = input.required<string>();
  selected = input(false, { ...inputBooleanTransform });

  select = output<string>();

  @HostListener('click') onSelectOption() {
    this.select.emit(this.id());
  }
}

export type SelectionOptionModel = {
  id: string;
  optionLabel: string;
  description: string;
};
