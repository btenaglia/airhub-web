import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

import { EMPTY } from 'rxjs'
@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private _http: HttpClient) {}
  getPlaces() {
    return this._http.get(environment.url + "public/places");
  }

  contact(data) {
    return this._http.post(environment.url + "public/contacts", data);
  }
  requestCharter(data) {
    return this._http.post(environment.url + "public/request-charter", data);
  }
  
  login(data){
    return this._http.post(environment.url + 'public/accounts/login',data)
  }
  register(data){
    return this._http.post(environment.url + 'public/accounts/create',data)
  }
  validateToken(){
    const token = sessionStorage.getItem('token')
    return token ? this._http.get(environment.url + 'public/validateToken/'+sessionStorage.getItem('token')) : EMPTY
  }
  searchFlights(data){
    return this._http.post(environment.url + 'public/flights/search',data)
  }
 
  //private endpoinst
  
  reservation(data){
    return this._http.post(environment.url + 'private/payments/reservationMobileCreate',data)
  }
}
