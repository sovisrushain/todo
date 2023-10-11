import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {HardCodedAuthService} from "./hard-coded-auth.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  auth: HardCodedAuthService

  constructor(auth: HardCodedAuthService) {
    this.auth = auth
  }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.auth.isUserLoggedIn()){
      return true
    } else {
      return false
    }
  }
}


