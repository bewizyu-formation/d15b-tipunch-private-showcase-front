import { Injectable } from "@angular/core";
import { ArtistApi } from "../api/ArtistApi";
import { Artist } from "../model/Artist";

@Injectable({
    providedIn: 'root'
})
export class ArtistService{
    constructor(private artistApi:ArtistApi){};

    save(artist:Artist){
        this.artistApi.save(artist);
    }

    findAll():Artist[]{
        return this.artistApi.findAll();
    }

    findById(id:number):Artist{
        return this.artistApi.findById(id);
    }

    update(artist:Artist){
        return this.artistApi.update(artist);
    }

    delete(artist:Artist){
        return this.artistApi.delete(artist);
    }
}