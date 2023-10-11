import { Component } from '@angular/core';
import {HardCodedAuthService} from "../service/hard-coded-auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  auth: HardCodedAuthService

  constructor(auth: HardCodedAuthService) {
    this.auth = auth
  }
}
