import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './core/ui/footer/footer.component';
import { HeaderComponent } from './core/ui/header/header.component';
import { initializeIcons } from './core/utils/custom-icons';

@Component({
  selector: 'crs-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    HeaderComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    initializeIcons();
  }
}
