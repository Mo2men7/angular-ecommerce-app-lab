import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  mail = 'momen.helmy.m@gmail.com';

  handleSubmit(loginForm: any) {
    console.log(loginForm);
    console.log(loginForm.value);
  }
}
