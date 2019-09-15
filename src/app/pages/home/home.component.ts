import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ObserversService } from "src/app/services/observers.service";
import { ApiService } from "src/app/services/api.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Utils } from "src/app/services/utils";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isMobile: boolean = true;
  places = [];
  sended = false;
  private util = new Utils();
  constructor(private route: Router, private srv: ApiService) {}
  public form = new FormGroup({
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
  public Seats = new FormGroup({
    origin: new FormControl(),
    destination: new FormControl(),
    customOrigin: new FormControl(),
    customDestination: new FormControl(),
    dateRequest: new FormControl(this.util.changeDate(new Date())),
    flexible: new FormControl(true)
  });

  ngOnInit() {
    let carousel = document.getElementById("mobile");
    var maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft = maxScrollLeft / 2;

    if (screen.width > 900) {
      this.isMobile = false;
    }
    this.srv.getPlaces().subscribe((data: any) => {
      this.places = data.data;
      this.form.get("origin").setValue(this.places[0].id);
      this.form.get("destination").setValue(this.places[1].id);
    });
  }
  request() {
    this.srv.requestCharter(this.form.getRawValue()).subscribe(data => {
      this.sended = true;
      setTimeout(() => (this.sended = false), 3000);
      this.defaultRequest();
    });
  }
  defaultRequest() {
    this.form.reset({
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
    this.form.get("origin").setValue(this.places[0].id);
    this.form.get("destination").setValue(this.places[1].id);
  }
  seats() {}
  goTo(url) {
    this.route.navigate([url]);
  }
}
