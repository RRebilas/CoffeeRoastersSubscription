import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';
import {
  SelectOptionComponent,
  SelectionOptionModel,
} from '../select-option/select-option.component';

@Component({
  selector: 'crs-option-group-selector',
  standalone: true,
  imports: [SelectOptionComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './option-group-selector.component.html',
  styles: `
    :host {
      width: 100%;
    }
  `,
})
export class OptionGroupSelectorComponent {
  formField = inject(ControlContainer).control;
  options = input.required<SelectionOptionModel[]>();

  constructor() {
    inject(ControlContainer).valueChanges?.subscribe(console.log);
  }

  onOptionSelect(id: string) {
    this.formField?.value === id
      ? this.formField.reset()
      : this.formField?.setValue(id);
  }
}
