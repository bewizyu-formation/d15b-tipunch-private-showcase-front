import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomepageContainerComponent} from './homepage-container/homepage-container.component';
import {SigninContainerComponent} from './signin-container/signin-container.component';
import {LoginContainerComponent} from './login-container/login-container.component';
import {HomeContainerComponent} from './home-container/home-container.component';
import {UsersContainerComponent} from './users-container/users-container.component';
import {ArtistsContainerComponent} from './artists-container/artists-container.component';

import {ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialConfigModule} from './material-config/material-config.module';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HeaderInterceptor} from './service/HeaderInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomepageContainerComponent,
    SigninContainerComponent,
    LoginContainerComponent,
    HomeContainerComponent,
    UsersContainerComponent,
    ArtistsContainerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialConfigModule
  ],
  providers: [
    CookieService,
    {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
