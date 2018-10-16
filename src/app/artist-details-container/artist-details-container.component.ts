import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../service/HeaderService';
import {from, Observable} from 'rxjs';
import {Artist} from '../model/Artist';
import {ArtistService} from '../service/ArtistService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artist-details-container',
  templateUrl: './artist-details-container.component.html',
  styleUrls: ['./artist-details-container.component.css']
})
export class ArtistDetailsContainerComponent implements OnInit {

  artist$: Observable<Artist> = new Observable<Artist>();
  constructor(private headerService: HeaderService, private artistService: ArtistService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.headerService.emitChange('Artist detail', 'event');
    const routeParams = this.activeRoute.snapshot.params;
    console.log(routeParams);
    this.artistService.findById(routeParams.idArtist);
    this.artist$ = from(this.artistService.getArtist$);
    console.log(this.artist$);
  }

}
