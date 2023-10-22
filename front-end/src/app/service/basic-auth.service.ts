import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthService {

  authenticate(username: string, password: string) {
    if (username === "admin" && password === "root") {
      sessionStorage.setItem('authUser', username)
      return true
    } else {
      return false
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authUser')
  }
}
