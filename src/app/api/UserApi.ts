import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Mock } from './mock';

@Injectable({
    providedIn:  'root'
})
export class UserApi {
    //MOCK DATAS
    public users: User[] = [];

    constructor(private mock: Mock) {
        this.users.push(...mock.USERS_MOCK);
    }
    save(user: User)  {
        this.users.push(user);
    }

    findAll(): User[] {
        return this.users;
    }

    findById(id: number): User {
        return this.users.filter(user => user.id == id)[0];
    }

    update(user: User) {
        if (this.users.length !== 0) {
            const index = this.users.indexOf(this.findById(user.id)[0]);
            if (index !== -1) {
                this.users[index] = user;
            }
        }
    }

    delete(user: User) {
        if (this.users.length !== 0) {
            const index = this.users.indexOf(user);
            if (index !== -1) {
                this.users.splice(index, 1);
            }
        }
    }
}
