import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Subscription } from "rxjs";
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: "app-form-login",
  templateUrl: "./form-login.component.html",
  styleUrls: ["./form-login.component.scss"]
})
export class FormLoginComponent implements OnInit {
  action = "";
  constructor(private srv: ApiService,private userSrv : ObserversService) {}
  loginObject = {
    email: "",
    password: ""
  };
  validationMail = false
  ngOnInit() {}
  formOpen(action) {
    this.action = action;
  }
  subscription: Subscription;
  loginForm() {
    if (this.loginObject.email !== "" && this.loginObject.password !== "")
      if (this.validateEmail(this.loginObject.email))
        this.subscription = this.srv
          .login(this.loginObject)
          .subscribe((data: any) => {
            sessionStorage.setItem("token", data.data.token);
            this.userSrv.setUser(data.data)
            this.userSrv.activeModal(false)
          });
      else this.validationMail = true
      else return false;
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  ngOnDestroy(): void {
   
    this.subscription.unsubscribe();
  }
}
