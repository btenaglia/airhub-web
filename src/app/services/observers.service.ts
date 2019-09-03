import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ObserversService {
  private isVisible$ = new BehaviorSubject<boolean>(false);
 
  constructor() {}


  activeSidebar(value){
    this.isVisible$.next(value)
  }

  activeValue(){
    return this.isVisible$.asObservable();
  }
}
