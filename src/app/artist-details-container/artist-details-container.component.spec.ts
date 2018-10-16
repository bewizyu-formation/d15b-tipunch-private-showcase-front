import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailsContainerComponent } from './artist-details-container.component';

describe('ArtistDetailsContainerComponent', () => {
  let component: ArtistDetailsContainerComponent;
  let fixture: ComponentFixture<ArtistDetailsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetailsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
