import { User } from './User';
import { City } from './City';
import { Department } from './Department';

export class Artist extends User {
    constructor(
        id: number,
        login: string,
        password: string,
        email: string,
        city: number,
        public artistName: string,
        public description: string,
        public website: string,
        public artistEmail: string,
        public departments: Department[],
        public picture: string

    ) {
        super(id, login, password, email, city);
    }
}
