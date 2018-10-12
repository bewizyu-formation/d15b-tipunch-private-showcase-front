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

  title:string = "Private ShowCase";
  public title$: Observable<string> = this.headerService.changeEmitted$;//= new BehaviorSubject<string>("Private ShowCase");
  constructor(private headerService:HeaderService,  private cookieService: CookieService) { }

  ngOnInit() {
    this.headerService.emitChange("Private ShowCase");
    this.title$.subscribe(v => this.title = v);
    console.log(this.isLogged());
    
  }

  isLogged(){
    return this.cookieService.check('tokenUser');
  }
}
