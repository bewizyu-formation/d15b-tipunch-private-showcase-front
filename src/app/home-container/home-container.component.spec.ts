import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContainerComponent } from './home-container.component';
import {MaterialConfigModule} from '../material-config/material-config.module';
import {HttpClientTestingModule} from '../../../node_modules/@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {CookieService} from 'ngx-cookie-service';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContainerComponent ],
      imports: [
        HttpClientTestingModule,
        MaterialConfigModule,
        RouterTestingModule,
      ],
      providers: [CookieService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
