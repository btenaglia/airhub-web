import { Injectable } from "@angular/core";

import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private srv: ApiService) {}

  getToken() {
    return this.srv.validateToken()
  }
  login(data) {
    this.srv.login(data)
  }

}
