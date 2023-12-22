import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-mask',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-mask.component.html',
  styleUrl: './form-mask.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMaskComponent { }
