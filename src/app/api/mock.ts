import { Artist } from '../model/Artist';
import { Department } from '../model/Department';
import { City } from '../model/City';
import { User } from '../model/User';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Mock {
    public CITYS_MOCK:City[] = [];
    public DEPTS_MOCK:Department[] = [];
    public USERS_MOCK:User[] = [];
    public ARTISTS_MOCK:Artist[] = [];

    constructor() {
        this.CITYS_MOCK.push(...[
            new City(0, '69001', 'Lyon 01'),
            new City(1, '06000', 'Nice'),
            new City(2, '75001', 'Paris 01'),
            new City(3, '44000', 'Nantes'),
            new City(4, '38000', 'Grenoble'),
        ]);
        this.DEPTS_MOCK.push(...[
            new Department(0, 'Rhône', '69'),
            new Department(1, 'Alpes Maritimes', '06'),
            new Department(2, 'Paris', '75'),
            new Department(3, 'Loire Atlantique', '44'),
            new Department(4, 'Isère', '38'),
        ]);

        this.USERS_MOCK.push(...[
            new User(0, 'manu', 'manu', 'manu@mail.fr', this.CITYS_MOCK[1]),
            new User(1, 'remi', 'remi', 'remi@mail.fr', this.CITYS_MOCK[4]),
            new User(2, 'anto', 'anto', 'anto@mail.fr', this.CITYS_MOCK[0]),
        ]);
        this.ARTISTS_MOCK.push(...[
            new Artist(0, 'artist1', 'pass1', 'artist1@mail.fr', this.CITYS_MOCK[0], 'Just Rock',
            'Rock description','artist1.site@site.fr', 'justrock@mail.fr', this.DEPTS_MOCK, 'default_artist.png'),
            new Artist(1, 'artist2', 'pass2', 'artist2@mail.fr', this.CITYS_MOCK[1], 'Just Metal',
            'Metal description','artist2.site@site.fr', 'justmetal@mail.fr', this.DEPTS_MOCK, 'default_artist.png'),
            new Artist(2, 'artist3', 'pass2', 'artist3@mail.fr', this.CITYS_MOCK[2], 'Just Reggae',
            'Reggae description','artist3.site@site.fr', 'justreggae@mail.fr', this.DEPTS_MOCK, 'default_artist.png'),
        ]);
    }
}
