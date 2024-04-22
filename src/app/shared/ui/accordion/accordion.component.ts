import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import inputBooleanTransform from '@app/shared/utils/input-boolean-transform';

@Component({
  selector: 'crs-accordion',
  standalone: true,
  imports: [CdkAccordionModule, MatIcon],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  title = input.required<string>();
  disabled = input(false, { ...inputBooleanTransform });
  index = input<number>(0);
}
