import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SigninContainerComponent} from './signin-container.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('SigninContainerComponent', () => {
  let component: SigninContainerComponent;
  let fixture: ComponentFixture<SigninContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninContainerComponent ],
      imports: [],
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
