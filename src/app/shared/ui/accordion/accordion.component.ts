import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'crs-accordion',
  standalone: true,
  imports: [CdkAccordionModule, MatIcon],
  templateUrl: './accordion.component.html',
  styles: `
    mat-icon {
      transition: 0.2s;
      width: 19px;
      height: 13px;
    }
    .rotated {
      transform: rotate(180deg);
    }
    mat-icon {
      fill: #0e8784;
    }

    mat-icon:hover {
      fill: #66d2cf;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  title = input.required<string>();
  index = input<number>(0);
}
