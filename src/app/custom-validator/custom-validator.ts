import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


export function DateValidator(control: AbstractControl): {[key: string]: boolean} | null {
    let currentDate = new Date();
    let start = new Date(control.value);
    if (currentDate > start) {
        return {
            dateCheck: true
        };
    }
    return null;    
}


// custom validator to check that two fields match
export function PasswordsMustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
