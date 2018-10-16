import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ArtistService} from '../service/ArtistService';
import {HeaderService} from '../service/HeaderService';
import {Artist} from '../model/Artist';
import {User} from '../model/User';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {
  artists$: Observable<Artist[]> = new Observable<Artist[]>();
  currentUser$: Observable<User>;

  constructor(private artistService: ArtistService, private headerService: HeaderService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // Getting artists related to user department code
    this.activatedRoute.data.subscribe((data) => {
      this.currentUser$ = data.user;
      this.currentUser$.subscribe(user => {
        console.log(user);
        this.artistService.findAllByDeptCode(user.city.departmentCode).subscribe(artists => {
          this.artists$ = of([...artists]);
        });
      });
    });
    this.headerService.emitChange('Artistes dans votre département', 'home');
  }
}
