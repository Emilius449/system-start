import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormControl,
  FormArray,
  ReactiveFormsModule,
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
  addressFormGroup = new FormGroup({
    street: new FormControl(''),
    city: new FormControl(''),
  });

  form = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormArray([this.addressFormGroup]),
  });

  constructor(private utilityService: UtilityService) {}

  get address() {
    return this.form.get('address') as FormArray;
  }

  addAddress() {
    this.address.push(this.addressFormGroup);
  }
  removeAddree(index: number) {
    this.address.removeAt(index);
  }
  onSubmit() {
    console.log('Form Value: ', this.form.value);
    if (this.form.valid) {
    } else {
      this.utilityService.validateAllFormFields(this.form);
    }
  }
}
