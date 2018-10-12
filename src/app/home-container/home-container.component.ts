import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ArtistService} from '../service/ArtistService';
import { HeaderService } from '../service/HeaderService';
import {Artist} from '../model/Artist';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  artists$: Observable<Artist[]> = new Observable<Artist[]>();
  artist$: Observable<Artist> = new Observable<Artist>();

  constructor(private artistService: ArtistService, private headerService: HeaderService) {
  }

  ngOnInit() {
    this.artistService.findAllByDeptId(44);
    this.artistService.findById(10);
    this.artists$ = from(this.artistService.getArtists$);
    this.artist$ = from(this.artistService.getArtist$);
    console.log(this.artists$);
    console.log(this.artist$);


    this.headerService.emitChange('Artistes dans votre département', 'home');
  }
}
