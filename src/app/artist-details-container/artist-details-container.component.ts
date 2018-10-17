import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../service/HeaderService';
import {Observable} from 'rxjs';
import {ArtistService} from '../service/ArtistService';
import {ActivatedRoute} from '@angular/router';
import {User} from '../model/User';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Artist} from '../model/Artist';
import {Department} from '../model/Department';

@Component({
  selector: 'app-artist-details-container',
  templateUrl: './artist-details-container.component.html',
  styleUrls: ['./artist-details-container.component.css']
})
export class ArtistDetailsContainerComponent implements OnInit {

  artist$ = this.artistService.getArtist$.asObservable();
  currentUser$: Observable<User>;
  isOwner = false;
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

    this.artistNameCtrl = fb.control('');
    this.shortDescriptionCtrl = fb.control('');
    this.longDescriptionCtrl = fb.control('');
    this.websiteCtrl = fb.control('');
    this.phoneCtrl = fb.control('');
    this.artistEmailCtrl = fb.control('');
    this.addressCtrl = fb.control('');
    this.departmentsCtrl = fb.control('');

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
        if (user.id === parseInt(routeParams.idArtist, 10)) {
          this.isOwner = true;
        }
      });
    });

    this.artist$.subscribe(a => {
      if (a != null) {
        this.artistNameCtrl.setValue(a.artistName);
        this.shortDescriptionCtrl.setValue(a.shortDescription);
        this.longDescriptionCtrl.setValue(a.longDescription);
        this.websiteCtrl.setValue(a.website);
        this.phoneCtrl.setValue(a.phone);
        this.artistEmailCtrl.setValue(a.artistEmail);
        this.addressCtrl.setValue(a.address);
        let stringdep = '' ;
        a.departments.forEach(dep => stringdep += dep.id + ',');
        this.departmentsCtrl.setValue(stringdep);

        this.currentArtist = a;
      }
    });
  }

  onSubmit() {
    const deptArray = [];
    const idArray = this.updateForm.value.departments.split(',') ;
    idArray.forEach(id => {
      if (id) {
        deptArray.push(new Department(id, null, null));
      }
    });
    console.log(deptArray);

    const newAtist = new Artist(
      this.currentArtist.id,
      this.currentArtist.login,
      null,
      this.currentArtist.email,
      this.currentArtist.city,
      this.updateForm.value.artistName,
      this.updateForm.value.shortDescription,
      this.updateForm.value.longDescription,
      this.updateForm.value.website,
      this.updateForm.value.artistEmail,
      deptArray,
      null,
      this.updateForm.value.address,
      this.updateForm.value.phone
    );
    console.log(newAtist);
    this.artistService.update(this.currentArtist);
  }
}
