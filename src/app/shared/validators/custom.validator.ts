import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordmismatch(control: AbstractControl): ValidationErrors |null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

   

    if(password?.value != confirmPassword?.value){
        return {'passwordDoNotMatch': true};
    }
    return null;
}