import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { SigninContainerComponent } from './signin-container/signin-container.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { ArtistsContainerComponent } from './artists-container/artists-container.component';

import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomepageContainerComponent,
    SigninContainerComponent,
    LoginContainerComponent,
    HomeContainerComponent,
    UsersContainerComponent,
    ArtistsContainerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
