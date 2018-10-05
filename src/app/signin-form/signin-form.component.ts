import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {checkPasswords} from '../validator/checkPasswords.validator';

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css']
})
export class SigninFormComponent implements OnInit {
  // Control variables for form validation
  signinForm: FormGroup;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  emailCtrl: FormControl;
  cityCtrl: FormControl;
  isArtistCtrl: FormControl;

  // Datas
  filteredCities: Observable<string[]>;
  cities: string[];
  isArtist = false;

  constructor(private fb: FormBuilder) {
    this.loginCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')]);
    this.confirmPasswordCtrl = fb.control('', [Validators.required]);
    this.emailCtrl = fb.control('', [Validators.required, Validators.email]);
    this.cityCtrl = fb.control('', [Validators.required]);

    this.signinForm = fb.group({
      'login': this.loginCtrl,
      'password': this.passwordCtrl,
      'confirmPassword': this.confirmPasswordCtrl,
      'email': this.emailCtrl,
      'city': this.cityCtrl,
      'isArtist': this.isArtistCtrl,
    }, {validator: checkPasswords});
  }

  ngOnInit() {
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onSubmit() {

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.cities.filter(city => city.toLowerCase().includes(filterValue));
  }

}
