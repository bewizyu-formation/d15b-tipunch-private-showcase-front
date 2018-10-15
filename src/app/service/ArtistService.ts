import {Injectable} from '@angular/core';
import {ArtistApi} from '../api/ArtistApi';
import {Artist} from '../model/Artist';
import {BehaviorSubject} from 'rxjs';
import {DepartmentService} from './DepartmentService';
import {Department} from '../model/Department';
import {CityService} from './CityService';
import {City} from '../model/City';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artists$: BehaviorSubject<Artist[]> = new BehaviorSubject<Artist[]>([]);
  private artist$: BehaviorSubject<Artist> = new BehaviorSubject<Artist>(null);
  arrayDept: object[] = [];

  constructor(private artistApi: ArtistApi, public deptService: DepartmentService, public cityService: CityService) {
  }

  save(artist: Artist): void {
    this.artistApi.save(artist).subscribe(
      (artists: Artist) => this.artists$.next([artists, ...this.artists$.getValue()]),
      (e) => {
        console.log(e);
      }
    );
  }

  findAll() {
    return this.artistApi.findAll().subscribe(
      (artists: Artist[]) => this.mapArtistWithDepartment(artists));
  }

  findById(id: number) {
    return this.artistApi.findById(id).subscribe(
      (artist: Artist) => {
        this.deptService.findAll().subscribe((departments: Department[]) => {
          this.arrayDept = departments;
          const depListJson = this.getDepartmentFromIds(artist['allowedDepartment']);
          const newArtist: Artist = this.getArtistFromJson(artist);
          newArtist.departments = depListJson;
          this.cityService.findById(artist.id).subscribe(
            (cityjson: City) => {
              const city = new City(cityjson.id, cityjson.departmentCode, cityjson.name);
              newArtist.city = city;
            });
          this.artist$.next(newArtist);
        });

      }
    );
  }

  findAllByDeptId(id: number) {
    return this.artistApi.findAllByDeptId(id).subscribe(
      (artists: Artist[]) => {
        this.mapArtistWithDepartment(artists);
      });
  }

  mapArtistWithDepartment(artists: Artist[]) {
    this.deptService.findAll().subscribe((departments: Department[]) => {
      this.arrayDept = departments;
      artists = artists.map((a: Artist) => {
        const depListJson = this.getDepartmentFromIds(a['allowedDepartment']);
        const artist: Artist = this.getArtistFromJson(a);
        artist.departments = depListJson;
        this.cityService.findById(a.id).subscribe(
          (cityjson: City) => {
            const city = new City(cityjson.id, cityjson.departmentCode, cityjson.name);
            artist.city = city;
          });
        return artist;
      });
      this.artists$.next(artists);
    });
  }

  getDepartmentFromIds(ids: number[]) {
    if (this.arrayDept.length === 0) {
      return null;
    }
    const allowDept: Department[] = [];
    ids.forEach(id => {
      const jsonDept = this.arrayDept[id - 1];
      allowDept.push(new Department(jsonDept['id'], jsonDept['name'], jsonDept['code']));
    });
    return allowDept;
  }

  getArtistFromJson(a: Artist) {
    return new Artist(
      a.id, a.login, a.password,
      a.email, null, a.artistName,
      a.shortDescription, a.longDescription,
      a.website, a.artistEmail, null, a.picture);
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

  get getArtist$(): BehaviorSubject<Artist> {
    return this.artist$;
  }
}
