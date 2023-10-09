import { Component } from '@angular/core';
import {HardCodedAuthService} from "../service/hard-coded-auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  auth: HardCodedAuthService

  constructor(auth: HardCodedAuthService) {
    this.auth = auth
  }

  ngOnInit() {
    this.auth.logout()
  }
}
