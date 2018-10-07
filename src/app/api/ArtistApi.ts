import { Injectable } from "@angular/core";
import { Artist } from "../model/Artist";
import { ARTISTS_MOCK } from "./mock";

@Injectable({
    providedIn: 'root'
})
export class ArtistApi{
    public artists:Artist[] = ARTISTS_MOCK;

    save(artist:Artist){
        this.artists.push(artist);
    }

    findAll():Artist[]{
        return this.artists;
    }

    findById(id:number):Artist{
        return this.artists.filter(u => {u.id === id})[0];
    }

    update(artist:Artist){
        if(this.artists.length !== 0){
            const index = this.artists.indexOf(this.findById(artist.id)[0]);
            if(index !== -1){
                this.artists[index] = artist;
            }
        }
    }

    delete(artist:Artist){
        if(this.artists.length !== 0){
            const index = this.artists.indexOf(artist);
            if(index != -1){
                this.artists.splice(index, 1);
            }
        }
    }
}