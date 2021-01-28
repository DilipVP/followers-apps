import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from './username.validators';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      account : fb.group({
        username : ['', [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace],
          UsernameValidators.shouldBeUnique],

         password: ['', Validators.required]
      })
    });
  }

  /*form = new FormGroup({

    account : new FormGroup({
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace],
        UsernameValidators.shouldBeUnique),


      password: new FormControl('',Validators.required)
    })

  });*/

  get username(){
    return this.form.get('account.username');
  }
  get password(){
    return this.form.get('account.password');
  }

  login(){
    if (this.username?.value !== 'thisisme') {
    this.form.setErrors({
        inValidLogin: true
    });
    }
  }
}
