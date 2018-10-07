import { Injectable } from '@angular/core';
import { Artist } from '../model/Artist';
import { Mock } from './mock';

@Injectable({
    providedIn: 'root'
})
export class ArtistApi {
    public artists: Artist[] = [];

    constructor(private mock: Mock) {
        this.artists.push(...mock.ARTISTS_MOCK);
    }

    save(artist: Artist) {
        this.artists.push(artist);
    }

    findAll(): Artist[] {
        return this.artists;
    }

    findById(id: number): Artist {
        return this.artists.filter(artist => artist.id == id)[0];
    }

    update(artist: Artist) {
        if (this.artists.length !== 0) {
            const index = this.artists.indexOf(this.findById(artist.id)[0]);
            if (index !== -1) {
                this.artists[index] = artist;
            }
        }
    }

    delete(artist: Artist) {
        if (this.artists.length !== 0) {
            const index = this.artists.indexOf(artist);
            if (index !== -1) {
                this.artists.splice(index, 1);
            }
        }
    }
}
