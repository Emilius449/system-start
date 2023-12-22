import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-wizard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-wizard.component.html',
  styleUrl: './form-wizard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWizardComponent { }
