import {AbstractControl} from '@angular/forms';
import {UserService} from '../service/UserService';
import {map} from 'rxjs/operators';

export function validateLoginNotTaken(userService: UserService) {
  return (control: AbstractControl) => {
    return userService.checkLoginNotTaken(control.value).pipe(map(res => {
      return res ? null : {emailTaken: true};
    }));
  };
}
