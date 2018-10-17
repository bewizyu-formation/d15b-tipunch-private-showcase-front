import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookerContainerComponent } from './booker-container.component';

describe('BookerContainerComponent', () => {
  let component: BookerContainerComponent;
  let fixture: ComponentFixture<BookerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookerContainerComponent ]
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
