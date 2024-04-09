import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeIcons } from '../../app/core/utils/custom-icons';

@NgModule({
  imports: [HttpClientModule],
})
export class MatIconRegistryModule {
  constructor() {
    initializeIcons();
  }
}
