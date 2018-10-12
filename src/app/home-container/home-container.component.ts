import {Component, OnInit} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ArtistService} from '../service/ArtistService';
import {DepartmentService} from '../service/DepartmentService';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  artists: Observable<any> = new Observable<any>();

  constructor(private artistService: ArtistService, private ds: DepartmentService) {
  }

  ngOnInit() {
    console.log(this.artistService.findAllByDeptId(69));
    this.artists = from(this.artistService.getArtists$);



  }

}
