import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../model/User';
import {UserApi} from '../api/UserApi';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

  constructor(private userApi: UserApi) {
  }

  save(user: User): void {
    this.userApi.save(user).subscribe(
      (users: User) => this.users$.next([users, ...this.users$.getValue()]),
      (e) => {
        console.log(e);
      }
    );
  }

  findAll() {
     this.userApi.findAll().subscribe(
      (users: User[]) => this.users$.next(users),
      (e) => {
        console.log(e);
      });
  }

  findById(id: number) {
    return this.userApi.findById(id);
  }

  update(user: User) {
    this.userApi.update(user).subscribe((users: User) => {
      const value: User[] = this.users$.getValue();
      const index = value.indexOf(value.filter(t => t.id === users.id)[0]);
      value[index] = users;
      this.users$.next(value);

    },
      (e) => {
        console.log(e);
      });
  }

  delete(user: User) {
    this.userApi.delete(user).subscribe(() => {
      this.users$.next(this.users$.getValue().filter(a => a.id !== user.id));
    },
    (e) => {
      console.log(e);
    });
  }

  checkLoginNotTaken(login: string) {
    return this.userApi.findAll().pipe(
      map((users: User[]) => users.filter(u => u.login === login)),
      map((users: User[]) => !users.length)) ;
  }
}
