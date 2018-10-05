import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SigninFormComponent } from './signin-form/signin-form.component';
import {MaterialConfigModule} from './material-config/material-config.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialConfigModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
