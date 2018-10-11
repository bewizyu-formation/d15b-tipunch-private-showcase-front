import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContainerComponent } from './home-container.component';
import {MaterialConfigModule} from '../material-config/material-config.module';

describe('HomeContainerComponent', () => {
  let component: HomeContainerComponent;
  let fixture: ComponentFixture<HomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeContainerComponent ],
      imports: [MaterialConfigModule]
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
