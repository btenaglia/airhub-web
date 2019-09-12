import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
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
  constructor(
    private srv : ApiService
  ) {}
  public formRequest = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    origin: new FormControl(),
    destination: new FormControl(),
    customOrigin: new FormControl(),
    customDestination: new FormControl(),
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
}
