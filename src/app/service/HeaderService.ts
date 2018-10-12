import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class HeaderService{
    private emitChangeSource = new Subject<string>();
    
    changeEmitted$ = this.emitChangeSource.asObservable();

    emitChange(value:string) {
        this.emitChangeSource.next(value);
    }
}