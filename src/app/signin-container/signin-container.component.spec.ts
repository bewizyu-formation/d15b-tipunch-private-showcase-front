import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SigninContainerComponent} from './signin-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialConfigModule} from '../material-config/material-config.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('SigninContainerComponent', () => {
  let component: SigninContainerComponent;
  let fixture: ComponentFixture<SigninContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninContainerComponent ],
      imports: [RouterTestingModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MaterialConfigModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
