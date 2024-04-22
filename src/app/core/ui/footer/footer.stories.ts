import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  Meta,
  StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular';
import { MatIconRegistryModule } from 'stories/shared/mat-icon-registry.module';
import { FooterComponent } from './footer.component';

const meta: Meta<FooterComponent> = {
  title: 'FooterComponent',
  component: FooterComponent,
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(HttpClientModule)] }),
    moduleMetadata({
      imports: [CommonModule, MatIcon, MatIconRegistryModule],
    }),
  ],
};

export default meta;

export const Default: StoryObj<FooterComponent> = {};
