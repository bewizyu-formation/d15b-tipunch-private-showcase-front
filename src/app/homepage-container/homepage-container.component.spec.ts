import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomepageContainerComponent} from './homepage-container.component';
import {ArtistService} from '../service/ArtistService';
import {HttpClientTestingModule} from '../../../node_modules/@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('HomepageContainerComponent', () => {
  let component: HomepageContainerComponent;
  let fixture: ComponentFixture<HomepageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageContainerComponent ],
      imports: [HttpClientTestingModule],
      providers: [HttpClient, ArtistService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
