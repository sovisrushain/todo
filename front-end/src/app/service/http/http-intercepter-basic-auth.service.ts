import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let username = 'admin'
    let password = 'root'
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password)
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthString
      }
    })
    return next.handle(req)
  }
}
