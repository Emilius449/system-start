import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormArray,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { UtilityService } from 'src/app/shared/service/utility.service';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder, private utilityService: UtilityService) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: this.fb.array([]),
    });
  }

  get address(): FormArray {
    return this.form.get('address') as FormArray;
  }

  addAddress() {
    const addressFormGroup = this.fb.group({
      street: [''],
      city: [''],
    });
    this.address.push(addressFormGroup);
  }

  removeAddress(index: number) {
    this.address.removeAt(index);
  }

  onSubmit() {
    console.log('Form Value: ', JSON.stringify(this.form.value));
    if (this.form.valid) {
      // Perform necessary actions with the form data
    } else {
      this.utilityService.validateAllFormFields(this.form);
    }
  }

  patch() {
    this.form.patchValue({
      firstName: 'Brynne',
      lastName: 'Allison',
      address: [
        { street: 'Aliqua Est consequa', city: 'Duis ipsum maxime v' },
        { street: 'EMil', city: 'Dar' },
      ],
    });
  }
}
