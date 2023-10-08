import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router: Router;
  username = ""
  password = ""
  errorMsg = "Invalid Credentials"
  invalidLogin = false

  constructor(router: Router) {
    this.router = router;
  }

  handleLogin() {
    if (this.username === "admin" && this.password === "dummy") {
      this.router.navigate(['dashboard', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
