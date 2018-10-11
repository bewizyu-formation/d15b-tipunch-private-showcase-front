import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/artists') || req.url.includes('/users')) {
      const clone = req.clone({ setHeaders: { 'Content-Type': 'application/json'}});
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
