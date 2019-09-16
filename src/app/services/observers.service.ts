import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ObserversService {
  private isVisible$ = new BehaviorSubject<boolean>(false);
  private openModal$ = new BehaviorSubject<boolean>(false);
  private user$ = new BehaviorSubject<Object>({});
  constructor() {}


  activeSidebar(value){
    this.isVisible$.next(value)
  }

  activeValue(){
    return this.isVisible$.asObservable();
  }

  activeModal(value){
    this.openModal$.next(value)
  }
  modalValue(){
    return this.openModal$.asObservable();
  }
  getUser(){
    return this.user$.asObservable()
  }
  setUser(user){
    this.user$.next(user)
  }
  userUnsubscribe(){
    this.user$.unsubscribe();
  }
}
