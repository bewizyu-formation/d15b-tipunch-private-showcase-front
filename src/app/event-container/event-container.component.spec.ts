import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventContainerComponent} from './event-container.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialConfigModule} from '../material-config/material-config.module';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CookieService} from 'ngx-cookie-service';

describe('EventContainerComponent', () => {
  let component: EventContainerComponent;
  let fixture: ComponentFixture<EventContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventContainerComponent],
      imports: [
        ReactiveFormsModule,
        MaterialConfigModule,
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule,
      ],
      providers: [
        CookieService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
