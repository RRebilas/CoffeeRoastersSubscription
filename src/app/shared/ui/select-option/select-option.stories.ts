/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryObj } from '@storybook/angular';
import { SelectOptionComponent } from './select-option.component';

const meta: Meta<SelectOptionComponent> = {
  component: SelectOptionComponent,
  title: 'SelectOptionComponent',
  args: {
    optionLabel: 'Capsule' as any,
    description: 'Compatible with Nespresso systems and similar brewers' as any,
  },
};
export default meta;

type Story = StoryObj<SelectOptionComponent>;

export const Default: Story = {};
export const Selected: Story = { args: { selected: true as any } };
