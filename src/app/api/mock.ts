import { Artist } from "../model/Artist";
import { Department } from "../model/Department";
import { City } from "../model/City";
import { User } from "../model/User";

    //MOCK DATAS
export const CITYS_MOCK:City[] = [
    new City(0, '69001', 'Lyon 01'),
    new City(1, '06000', 'Nice'),
    new City(2, '75001', 'Paris 01'),
    new City(3, '44000', 'Nantes'),
    new City(4, '38000', 'Grenoble'),
]
export const DEPTS_MOCK:Department[] = [
    new Department(0, 'Rhône', '69'),
    new Department(1, 'Alpes Maritimes', '06'),
    new Department(2, 'Paris', '75'),
    new Department(3, 'Loire Atlantique', '44'),
    new Department(4, 'Isère', '38'),
]

export const USERS_MOCK:User[] = [
    new User(0, 'manu', 'manu', 'manu@mail.fr', this.citys[1]),
    new User(0, 'remi', 'remi', 'remi@mail.fr', this.citys[4]),
    new User(0, 'anto', 'anto', 'anto@mail.fr', this.citys[0]),
];

export const ARTISTS_MOCK:Artist[] = [
    new Artist(0, 'artist1', 'pass1', 'artist1@mail.fr', this.citys[0], 'Just Rock', 'Rock description','artist1.site@site.fr', 'justrock@mail.fr', this.depts, 'default_artist.png'),
    new Artist(0, 'artist2', 'pass2', 'artist2@mail.fr', this.citys[1], 'Just Metal', 'Metal description','artist2.site@site.fr', 'justmetal@mail.fr', this.depts, 'default_artist.png'),
    new Artist(0, 'artist3', 'pass2', 'artist3@mail.fr', this.citys[2], 'Just Reggae', 'Reggae description','artist3.site@site.fr', 'justreggae@mail.fr', this.depts, 'default_artist.png'),
];