import {Injectable} from '@angular/core';
import {ArtistApi} from '../api/ArtistApi';
import {Artist} from '../model/Artist';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artists$: BehaviorSubject<Artist[]> = new BehaviorSubject<Artist[]>([]);

  constructor(private artistApi: ArtistApi) {
  }

  save(artist: Artist): void {
    this.artistApi.save(artist).subscribe(
      (artists: Artist) => this.artists$.next([artists, ...this.artists$.getValue()]),
      (e) => {console.log(e); }
      );
  }

  findAll() {
    return this.artistApi.findAll().subscribe(
      (artists: Artist[]) => this.artists$.next(artists),
      (e) => {console.log(e); });
  }

  findById(id: number) {
    return this.artistApi.findById(id);
  }

  findAllByDeptId(id: number) {
    return this.artistApi.findAllByDeptId(id).subscribe(
      (artists: Artist[]) => this.artists$.next(artists),
      (e) => {console.log(e); });
  }

  update(artist: Artist) {
    this.artistApi.update(artist).subscribe((artists: Artist) => {
      const value: Artist[] = this.artists$.getValue();
      const index = value.indexOf(value.filter(t => t.id === artists.id)[0]);
      value[index] = artists;
      this.artists$.next(value);

    });
  }

  delete(artist: Artist) {
    this.artistApi.delete(artist).subscribe(() => {
      this.artists$.next(this.artists$.getValue().filter(a => a.id !== artist.id));
    });
  }

  get getArtists$(): BehaviorSubject<Artist[]> {
    return this.artists$;
  }

  set setArtists$(value: BehaviorSubject<Artist[]>) {
    this.artists$ = value;
  }

}
