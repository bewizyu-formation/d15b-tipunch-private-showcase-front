import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {checkPasswords} from '../validator/checkPasswords.validator';
import {UserService} from '../service/UserService';
import {ArtistService} from '../service/ArtistService';
import {User} from '../model/User';
import {Artist} from '../model/Artist';
import {City} from '../model/City';
import {validateLoginNotTaken} from '../validator/validateLoginNotTaken.validator';
import {CityService} from '../service/CityService';
import {debounceTime} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin-container',
  templateUrl: './signin-container.component.html',
  styleUrls: ['./signin-container.component.css']
})
export class SigninContainerComponent implements OnInit {
  // Control variables for form validation
  signinForm: FormGroup;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  cityCtrl: FormControl;
  artistNameCtrl: FormControl;
  shortDescriptionCtrl: FormControl;

  // Field variables to add user/artist
  newUser: User;
  newArtist: Artist;

  // Datas
  filteredCities$ = this.cityService.cities$;
  city: City;
  isArtist = false;

  constructor(private fb: FormBuilder, private userService: UserService, private artistService: ArtistService,
              private cityService: CityService, private router: Router) {
    // Initializing controls for form fields
    this.loginCtrl = fb.control('', [Validators.required], validateLoginNotTaken(this.userService));
    this.passwordCtrl = fb.control('',
      [Validators.required, Validators.pattern(new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'))]);
    this.confirmPasswordCtrl = fb.control('', [Validators.required]);
    this.emailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.cityCtrl = fb.control('', [Validators.required]);
    this.artistNameCtrl = fb.control('');
    this.shortDescriptionCtrl = fb.control('');

    // Initializing form group control
    this.signinForm = fb.group({
      'login': this.loginCtrl,
      'password': this.passwordCtrl,
      'confirmPassword': this.confirmPasswordCtrl,
      'email': this.emailCtrl,
      'city': this.cityCtrl,
      'artistName': this.artistNameCtrl,
      'shortDescription': this.shortDescriptionCtrl
    }, {validator: checkPasswords});

    // Initializing objects to add
    this.newUser = new User(undefined, this.loginCtrl.value, this.passwordCtrl.value, this.emailCtrl.value, this.cityCtrl.value);
    this.newArtist = new Artist(undefined,
      this.loginCtrl.value,
      this.passwordCtrl.value,
      this.emailCtrl.value,
      this.cityCtrl.value,
      this.artistNameCtrl.value,
      this.shortDescriptionCtrl.value,
      undefined,
      this.emailCtrl.value,
      undefined,
      undefined,
      null,
      null,
      null);
  }

  ngOnInit() {
    this.cityCtrl.valueChanges.pipe(
      debounceTime(800)
    ).subscribe((value) => {
      if (value.length > 1) {
        this.cityService.findAllStartsWith(value);
      } else {
        this.filteredCities$.next([]);
      }
    });
  }

  handleCitySelection(city: City) {
    this.city = city;
  }

  onSubmit() {
    if (this.isArtist) {
      this.newArtist = new Artist(undefined,
        this.loginCtrl.value,
        this.passwordCtrl.value,
        this.emailCtrl.value,
        this.city,
        this.artistNameCtrl.value,
        this.shortDescriptionCtrl.value,
        undefined,
        this.emailCtrl.value,
        undefined,
        undefined,
      null,
        null,
        null);
      this.artistService.save(this.newArtist);
      this.router.navigate(['login']);
    } else {
      this.newUser = new User(undefined, this.loginCtrl.value, this.passwordCtrl.value, this.emailCtrl.value, this.city);
      this.userService.save(this.newUser);
      this.router.navigate(['login']);
    }
  }

  /**
   * @description Clear validators and reset fields when the artist-related checkbox is unchecked, set validators otherwise
   */
  onCheckboxChange(isArtist: boolean) {
    if (isArtist) {
      this.shortDescriptionCtrl.setValidators([Validators.required, Validators.maxLength(200)]);
      this.shortDescriptionCtrl.updateValueAndValidity();
      this.artistNameCtrl.setValidators([Validators.required]);
      this.artistNameCtrl.updateValueAndValidity();
    } else {
      this.artistNameCtrl.clearValidators();
      this.shortDescriptionCtrl.clearValidators();
      this.artistNameCtrl.reset('');
      this.shortDescriptionCtrl.reset('');
    }
  }
}
