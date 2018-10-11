import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService ){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('/artists') || req.url.includes('/users')) {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
    
    if(this.cookieService.check('tokenUser')){
      headers = headers.set('Authorization', this.cookieService.get('tokenUser'));
    }
      const clone = req.clone({headers});
      return next.handle(clone);
    }
    return next.handle(req);
  }
}
