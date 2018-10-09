import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {
  loginForm: FormGroup;
  loginCtrl: FormControl;
  passwordCtrl: FormControl;

  constructor(private fb: FormBuilder) {
    this.loginCtrl = fb.control('', [Validators.required]);
    this.passwordCtrl = fb.control('', [Validators.required]);

    this.loginForm = fb.group({
      'login': this.loginForm,
      'password': this.passwordCtrl
    });

  }

  ngOnInit() {
  }

  onSubmit() { }

}
