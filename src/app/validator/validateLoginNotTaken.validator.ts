import {AbstractControl} from '@angular/forms';
import {UserService} from '../service/UserService';

export function validateLoginNotTaken(userService: UserService) {
  return (control: AbstractControl) => {
    if (userService.checkLoginNotTaken(control.value)) {
      return null;
    } else {
      return {'taken' : true};
    }
  };
}
