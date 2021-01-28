import { AbstractControl } from '@angular/forms';

export class PasswordValidators{

    static isOldPasswordInvalid(control: AbstractControl){

       return new Promise((resolve) => {

        if (control.value !== '1234') {  resolve({isOldPasswordInvalid: true}); }
        else { resolve(null); }
        });
    }

    static isPasswordsNotMatching(control: AbstractControl){

        const newPassword: any = control.get('newPassword');
        const confirmPassword: any = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
        return {isPasswordsNotMatching: true};
        }

        return null;

    }
}
