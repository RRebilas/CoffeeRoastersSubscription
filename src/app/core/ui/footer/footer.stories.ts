import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  title: 'FooterComponent',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule, MatIcon],
    }),
  ],
};

export default meta;

export const Default: StoryObj<FooterComponent> = {};
