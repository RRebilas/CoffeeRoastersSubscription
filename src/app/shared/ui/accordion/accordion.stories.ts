/* eslint-disable @typescript-eslint/no-explicit-any */
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import {
  Meta,
  StoryObj,
  applicationConfig,
  argsToTemplate,
  moduleMetadata,
} from '@storybook/angular';
import { MatIconRegistryModule } from 'stories/shared/mat-icon-registry.module';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Shared/Accordion',
  component: AccordionComponent,
  render: (args) => ({
    template: `
        <cdk-accordion>
            <crs-accordion ${argsToTemplate(args)}>
                Test content is here
            </crs-accordion>
        </cdk-accordion>
    `,
    props: args,
    moduleMetadata: { imports: [CdkAccordionModule] },
  }),
  decorators: [
    applicationConfig({ providers: [importProvidersFrom(HttpClientModule)] }),
    moduleMetadata({ imports: [MatIconRegistryModule] }),
  ],
};

export default meta;
type Story = StoryObj<AccordionComponent>;

export const Default: Story = {
  name: 'Default closed',
  args: { title: 'What type of coffee?' as any },
};

export const Disabled: Story = {
  name: 'Disabled closed',
  args: { title: 'What type of coffee?' as any, disabled: true as any },
};
