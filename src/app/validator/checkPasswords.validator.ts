import {FormGroup} from '@angular/forms';

export function checkPasswords(group: FormGroup) {
  const password = group.controls.password;
  const confirmPassword = group.controls.confirmPassword;

  return password.value === confirmPassword.value ? null : confirmPassword.setErrors({ notSame: true });
}
