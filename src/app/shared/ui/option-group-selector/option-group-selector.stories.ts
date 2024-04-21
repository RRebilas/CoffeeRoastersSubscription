import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  Meta,
  StoryObj,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { SelectionOptionModel } from '../select-option/select-option.component';
import { OptionGroupSelectorComponent } from './option-group-selector.component';

const meta: Meta<OptionGroupSelectorComponent> = {
  title: 'OptionGroupSelectorComponent',
  component: OptionGroupSelectorComponent,
  decorators: [moduleMetadata({ imports: [ReactiveFormsModule, FormsModule] })],
  render: (args: OptionGroupSelectorComponent) => ({
    props: {
      ...args,
      formGroup: new FormGroup({ coffeeType: new FormControl('') }),
    },
    template: `
        <form ${argsToTemplate(args)} style="max-width: 700px">
            <crs-option-group-selector ${argsToTemplate(args)}/>
        </form>
    `,
  }),
};

export default meta;

export const Default: StoryObj = {
  args: {
    options: [
      { id: '1', optionLabel: 'Single origin', description: 'Test' },
      { id: '2', optionLabel: 'Decaf', description: 'test' },
      { id: '3', optionLabel: 'Blend', description: 'test' },
    ] as SelectionOptionModel[],
  },
};
