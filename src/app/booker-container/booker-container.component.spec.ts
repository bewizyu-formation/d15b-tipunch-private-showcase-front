import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BookerContainerComponent} from './booker-container.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialConfigModule} from '../material-config/material-config.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';

describe('BookerContainerComponent', () => {
  let component: BookerContainerComponent;
  let fixture: ComponentFixture<BookerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookerContainerComponent, ],
      imports: [
        ReactiveFormsModule,
        MaterialConfigModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule,
      ],
      providers: [
        CookieService,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
