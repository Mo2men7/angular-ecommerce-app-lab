import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { ConfirmedValidator } from './confirmed.validator.ts';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor() {
    this.registerForm = new FormGroup({
      registerEmail: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
      ]),
      registerFirstName: new FormControl('', [Validators.required]),
      registerLastName: new FormControl('', [Validators.required]),
      registerUsername: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\S+$/),
      ]),
      registerPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
        ),
      ]),
      registerCPassword: new FormControl('', [
        Validators.required,
        Validators.pattern(/[registerPassword]/),
      ]),
      // validator: ConfirmedValidator('registerPassword', 'registerCPassword'),
    });
  }
  handleSubmit() {
    console.log(this.registerForm);
  }
}
