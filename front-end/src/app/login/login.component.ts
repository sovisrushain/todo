import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = ""
  password = ""
  errorMsg = "Invalid Credentials"
  invalidLogin = false

  handleLogin() {
    this.invalidLogin = !(this.username === "admin" && this.password === "dummy");
  }
}
