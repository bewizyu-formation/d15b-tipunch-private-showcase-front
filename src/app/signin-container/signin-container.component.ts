import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {checkPasswords} from '../validator/checkPasswords.validator';
import {UserService} from '../service/UserService';
import {validateLoginNotTaken} from '../validator/validateLoginNotTaken.validator';
import {ArtistService} from '../service/ArtistService';
import {User} from '../model/User';
import {Artist} from '../model/Artist';

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
  descriptionCtrl: FormControl;

  // Field variables to add user/artist
  newUser: User;
  newArtist: Artist;

  // Datas
  filteredCities: Observable<string[]>;
  cities: string[];
  isArtist = false;

  constructor(private fb: FormBuilder, private userService: UserService, private artistService: ArtistService) {
    // Initializing controls for form fields
    this.loginCtrl = fb.control('', [Validators.required, validateLoginNotTaken(this.userService)]);
    this.passwordCtrl = fb.control('',
      [Validators.required, Validators.pattern(new RegExp('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$'))]);
    this.confirmPasswordCtrl = fb.control('', [Validators.required]);
    this.emailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.cityCtrl = fb.control('', [Validators.required]);
    this.artistNameCtrl = fb.control('');
    this.descriptionCtrl = fb.control('');

    // Initializing form group control
    this.signinForm = fb.group({
      'login': this.loginCtrl,
      'password': this.passwordCtrl,
      'confirmPassword': this.confirmPasswordCtrl,
      'email': this.emailCtrl,
      'city': this.cityCtrl,
      'artistName': this.artistNameCtrl,
      'description': this.descriptionCtrl
    }, {validator: checkPasswords});
  }

  ngOnInit() {
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    // Mocks for tests purposes
    this.cities = [
      'Lyon',
      'Palaiseau',
      'Marseille',
      'Montpellier',
      'Bordeaux',
      'Nice',
      'Nîmes',
      'Paris',
      'Montluçon',
      'Moncuq'
    ];
  }

  onSubmit() {
    if (this.isArtist) {
      this.newArtist = new Artist(undefined,
        this.loginCtrl.value,
        this.passwordCtrl.value,
        this.emailCtrl.value,
        this.cityCtrl.value,
        this.artistNameCtrl.value,
        this.descriptionCtrl.value,
        undefined,
        this.emailCtrl.value,
        undefined,
        undefined);
      this.artistService.save(this.newArtist);
    } else {
      this.newUser = new User(undefined, this.loginCtrl.value, this.passwordCtrl.value, this.emailCtrl.value, this.cityCtrl.value);
      this.userService.save(this.newUser);
    }
  }

  /**
   * @description Clear validators and reset fields when the artist-related checkbox is unchecked, set validators otherwise
   */
  onCheckboxChange(isArtist: boolean) {
    if (isArtist) {
      this.descriptionCtrl.setValidators([Validators.required, Validators.maxLength(200)]);
      this.descriptionCtrl.updateValueAndValidity();
      this.artistNameCtrl.setValidators([Validators.required]);
      this.artistNameCtrl.updateValueAndValidity();
    } else {
      this.artistNameCtrl.clearValidators();
      this.descriptionCtrl.clearValidators();
      this.artistNameCtrl.reset('');
      this.descriptionCtrl.reset('');
    }
  }

  /**
   * @description Filter values of autocomplete field
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }
}
