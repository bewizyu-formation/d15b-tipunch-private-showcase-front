import { Injectable } from "@angular/core";
import { UserApi } from "../api/UserApi";
import { User } from "../model/User";

@Injectable({
    providedIn: 'root'
})
export class UserService{
    constructor(private userApi:UserApi){};

    save(user:User){
        this.userApi.save(user);
    }

    findAll():User[]{
        return this.userApi.findAll();
    }

    findById(id:number):User{
        return this.userApi.findById(id);
    }

    update(user:User){
        return this.userApi.update(user);
    }

    delete(user:User){
        return this.userApi.delete(user);
    }
}