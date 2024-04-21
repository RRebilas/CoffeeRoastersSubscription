import { Meta, StoryObj, argsToTemplate } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: { label: 'Confirm' },
};

export const Disabled: Story = {
  args: Default.args,
  render: (args: ButtonComponent) => ({
    props: args,
    template: `<crs-button disabled ${argsToTemplate(args)}></crs-button>`,
  }),
};
