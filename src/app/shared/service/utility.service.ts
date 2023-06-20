import { Injectable } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  UntypedFormArray,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}
  /**
   *
   * @param formGroup Form Name
   */
  validateAllFormFields(formGroup: any, showLogs = true) {
    const errorArray: string[] = [];
    if (formGroup.controls) {
      Object.keys(formGroup.controls).forEach((field) => {
        const control = formGroup.get(field);
        if (control instanceof UntypedFormControl) {
          control.markAsTouched({ onlySelf: true });
          // ! Delete this after production

          if (showLogs && formGroup.controls[field].status === 'INVALID') {
            errorArray.push(
              `Input field "${field}" is ${formGroup.controls[field].status}`
            );
          }
        } else if (control instanceof UntypedFormGroup) {
          this.validateAllFormFields(control, showLogs);
        } else if (control instanceof UntypedFormArray) {
          for (let index = 0; index < control.value.length; index++) {
            const element = control as UntypedFormArray;
            this.validateAllFormFields(element.controls[index], showLogs);
          }
        }
      });
    } else {
      if (formGroup?.status === 'INVALID') {
        formGroup.markAsTouched({ onlySelf: true });
      }
    }
    if (errorArray.length > 0) {
      // Validation Notification
      console.log(errorArray);
    }
  }
}
