import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  Meta,
  StoryObj,
  applicationConfig,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { MatIconRegistryModule } from '../../../../stories/shared/mat-icon-registry.module';
import { HeaderComponent } from './header.component';

const meta: Meta<HeaderComponent> = {
  title: 'HeaderComponent',
  component: HeaderComponent,
  tags: ['autodocs'],
  render: (args: HeaderComponent) => ({
    props: { ...args },
    template: `<crs-header ${argsToTemplate(args)}></crs-header>`,
  }),
  decorators: [
    applicationConfig({
      providers: [
        importProvidersFrom(
          OverlayModule,
          LayoutModule,
          HttpClientModule,
          RouterModule.forRoot([]),
        ),
      ],
    }),
    moduleMetadata({
      imports: [CommonModule, MatIcon, MatIconRegistryModule],
    }),
  ],
};

export default meta;

type Story = StoryObj<HeaderComponent>;

export const Default: Story = {};
