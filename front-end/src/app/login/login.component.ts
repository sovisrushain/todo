import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {HardCodedAuthService} from "../service/hard-coded-auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  router: Router
  auth: HardCodedAuthService
  username = ""
  password = ""
  errorMsg = "Invalid Credentials"
  invalidLogin = false

  constructor(router: Router, auth: HardCodedAuthService) {
    this.router = router
    this.auth = auth
  }

  handleLogin() {
    if (this.auth.authenticate(this.username, this.password)) {
      this.router.navigate(['dashboard', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
}
