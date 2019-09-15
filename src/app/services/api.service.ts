import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

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
}
