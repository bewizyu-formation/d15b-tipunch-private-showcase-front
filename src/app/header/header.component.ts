import {Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../service/HeaderService';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Private ShowCase';

  public title$: Observable<string> = this.headerService.changeEmitted$;
  constructor(public headerService: HeaderService,  private cookieService: CookieService) { }

  ngOnInit() {
    this.title$.subscribe(v => this.title = v);
  }

  isLogged() {
    return this.cookieService.check('tokenUser');
  }

  logout() {
    // NETWORK CALL ON /LOGOUT

    // CLEAN userToken COOKIE
    this.cookieService.deleteAll();
  }
}
