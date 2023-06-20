import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-form-group-nested',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-group-nested.component.html',
  styleUrls: ['./form-group-nested.component.scss'],
})
export class FormGroupNestedComponent {
  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', [
        Validators.required,
        Validators.maxLength(20),
      ]),
    }),
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
