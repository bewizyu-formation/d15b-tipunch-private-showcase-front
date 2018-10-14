import { Routes } from '@angular/router';
import { HomepageContainerComponent } from './homepage-container/homepage-container.component';
import { SigninContainerComponent } from './signin-container/signin-container.component';
import { LoginContainerComponent } from './login-container/login-container.component';
import { HomeContainerComponent } from './home-container/home-container.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { ArtistsContainerComponent } from './artists-container/artists-container.component';
import { EventContainerComponent } from './event-container/event-container.component';

export const PATH_HOMEPAGE = '';
export const PATH_SIGNIN = 'signin';
export const PATH_LOGIN = 'login';

export const PATH_HOME = 'home';
export const PATH_HOME_EVENT = 'events';

export const PATH_HOME_USERS = 'users/:idUser';
export const PATH_HOME_ARTISTS = 'artists/:idArtist';


export const ROUTES: Routes = [
    { path: PATH_HOMEPAGE, component: HomepageContainerComponent },
    { path: PATH_SIGNIN, component: SigninContainerComponent },
    { path: PATH_LOGIN, component: LoginContainerComponent },
    { path: PATH_HOME,
        component: HomeContainerComponent,
        children: [
            {path: PATH_HOME_USERS, component: UsersContainerComponent},
            {path: PATH_HOME_ARTISTS, component: ArtistsContainerComponent},
            {path: PATH_HOME_EVENT, component: EventContainerComponent},
        ]
    },
  ];
