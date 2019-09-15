import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Utils } from "src/app/services/utils";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: "app-private-charter",
  templateUrl: "./private-charter.component.html",
  styleUrls: ["./private-charter.component.scss"]
})
export class PrivateCharterComponent implements OnInit {
  places = [];
  util = new Utils();
  validate = false;
  sended = false
  constructor(
    private srv : ApiService
  ) {}
  public formRequest = new FormGroup({
    name: new FormControl("", Validators.required),
    lastname: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    phone: new FormControl("", Validators.required),
    passengers: new FormControl(1),
    origin: new FormControl(),
    destination: new FormControl(),
    customOrigin: new FormControl(""),
    customDestination: new FormControl(""),
    dateRequest: new FormControl(this.util.changeDate(new Date())),
    timeRequest: new FormControl("12:00")
  });
  ngOnInit() {
    this.srv.getPlaces().subscribe((data: any) => {
      this.places = data.data;
      this.formRequest.get("origin").setValue(this.places[0].id);
      this.formRequest.get("destination").setValue(this.places[1].id);
    });
  }
  request(){
    
    if (!this.formRequest.valid) {
      this.validate = true;
      return false;
    }
    if (
      this.formRequest.get("origin").value == 0 &&
      this.formRequest.get("customOrigin").value == ""
    ) {
      this.validate = true;
      return false;
    }
    if (
      this.formRequest.get("destination").value == 0 &&
      this.formRequest.get("customDestination").value == ""
    ) {
      this.validate = true;
      return false;
    }
    this.srv.requestCharter(this.formRequest.getRawValue()).subscribe(data => {
      this.sended = true;
      setTimeout(() => (this.sended = false), 3000);
      this.defaultRequest();
    });
  }
 
  defaultRequest() {
    this.formRequest.reset({
      passengers: 1,
      dateRequest: this.util.changeDate(new Date()),
      timeRequest: "12:00",
      customOrigin: "",
      customDestination: "",
      name: "",
      lastname: "",
      email: "",
      phone: "",
    });
    this.formRequest.get("origin").setValue(this.places[0].id);
    this.formRequest.get("destination").setValue(this.places[1].id);
    this.validate = false
  }
}
