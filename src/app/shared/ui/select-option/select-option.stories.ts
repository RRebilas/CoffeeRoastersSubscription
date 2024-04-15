import { Meta, StoryObj } from '@storybook/angular';
import { SelectOptionComponent } from './select-option.component';

const meta: Meta<SelectOptionComponent> = {
  component: SelectOptionComponent,
  title: 'SelectOptionComponent',
  args: {
    optionLabel: 'Capsule',
    description: 'Compatible with Nespresso systems and similar brewers',
  },
  //   render: (args: SelectOptionComponent) => ({
  //     props: args,
  //     template: `
  //     <div style="width: 300px">
  //       <crs-select-option ${argsToTemplate(args)}></crs-select-option>
  //     </div>
  //     `,
  //   }),
};
export default meta;

type Story = StoryObj<SelectOptionComponent>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true } };
