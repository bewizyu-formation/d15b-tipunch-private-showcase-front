import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsContainerComponent } from './artists-container.component';

describe('ArtistsContainerComponent', () => {
  let component: ArtistsContainerComponent;
  let fixture: ComponentFixture<ArtistsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
