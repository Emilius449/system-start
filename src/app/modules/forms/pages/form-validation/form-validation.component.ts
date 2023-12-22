import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormValidationComponent { }
