import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class HeaderService {
    private emitChangeSource = new Subject<string>();

    changeEmitted$ = this.emitChangeSource.asObservable();
    isHome = false;
    isEvent = false;

    emitChange(value: string, route: string) {
        this.emitChangeSource.next(value);
        switch (route) {
            case 'home':
                this.isHome = true;
                this.isEvent = false;
                break;
            case 'event':
                this.isHome = false;
                this.isEvent = true;
                break;
            case 'homepage':
                this.isHome = false;
                this.isEvent = false;
                break;
        }
    }
}
