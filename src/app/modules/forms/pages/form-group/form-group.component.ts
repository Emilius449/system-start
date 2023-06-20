import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
  });
  constructor(private utilityService: UtilityService) {}
  onSubmit() {
    console.log('Form Value: ', this.form.value);
    if (this.form.valid) {
    } else {
      this.utilityService.validateAllFormFields(this.form);
    }
  }
}
