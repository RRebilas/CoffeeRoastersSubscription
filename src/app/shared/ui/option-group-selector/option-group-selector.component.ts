import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { SelectOptionComponent } from '../select-option/select-option.component';

@Component({
  selector: 'crs-option-group-selector',
  standalone: true,
  imports: [SelectOptionComponent, NgFor],
  templateUrl: './option-group-selector.component.html',
  styles: ``,
})
export class OptionGroupSelectorComponent {}
