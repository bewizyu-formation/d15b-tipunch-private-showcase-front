import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/HeaderService';
import {Observable} from 'rxjs';
import {ArtistService} from '../service/ArtistService';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/User';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Artist} from '../model/Artist';

@Component({
  selector: 'app-artist-details-container',
  templateUrl: './artist-details-container.component.html',
  styleUrls: ['./artist-details-container.component.css']
})
export class ArtistDetailsContainerComponent implements OnInit {

  artist$ = this.artistService.getArtist$.asObservable();
  currentUser$: Observable<User>;
  isOwner = false ;
  currentArtist: Artist;

  updateForm: FormGroup;
  artistNameCtrl: FormControl;
  shortDescriptionCtrl: FormControl;
  longDescriptionCtrl: FormControl;
  websiteCtrl: FormControl;
  phoneCtrl: FormControl;
  artistEmailCtrl: FormControl;
  addressCtrl: FormControl;
  departmentsCtrl: FormControl;

  constructor(private fb: FormBuilder, private headerService: HeaderService,
              private artistService: ArtistService, private activeRoute: ActivatedRoute) {

    this.updateForm = fb.group({
      'artistName': this.artistNameCtrl,
      'shortDescription': this.shortDescriptionCtrl,
      'longDescription': this.longDescriptionCtrl,
      'website': this.websiteCtrl,
      'phone': this.phoneCtrl,
      'artistEmail': this.artistEmailCtrl,
      'address': this.addressCtrl,
      'departments': this.departmentsCtrl
    });
  }

  ngOnInit() {
    this.headerService.emitChange('Artist detail', 'event');
    const routeParams = this.activeRoute.snapshot.params;
    this.artistService.findById(routeParams.idArtist);
    // Getting artists related to user department code
    this.activeRoute.data.subscribe((data) => {
      this.currentUser$ = data.user;
      this.currentUser$.subscribe(user => {
        if (user.id === parseInt(routeParams.idArtist) ) {
          this.isOwner = true ;
        }
      });
    });

    this.artist$.forEach(a => this.currentArtist = a);
  }

  onSubmit() {
    console.log('before');
    console.log(this.currentArtist);
    this.currentArtist.artistName = this.artistNameCtrl.value;
    this.currentArtist.shortDescription = this.shortDescriptionCtrl.value;
    this.currentArtist.longDescription = this.longDescriptionCtrl.value;
    this.currentArtist.website = this.websiteCtrl.value;
    this.currentArtist.artistEmail = this.artistEmailCtrl.value;
    this.currentArtist.phone = this.phoneCtrl.value;
    this.currentArtist.address = this.addressCtrl.value;
    this.currentArtist.departments = this.departmentsCtrl.value;
    console.log('after');
    console.log(this.currentArtist);
    this.artistService.update(this.currentArtist);
  }
}
