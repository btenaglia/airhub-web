import { Component, OnInit } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
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
  constructor(
    private route: Router,
    private srv: ApiService,
    private srvObs: ObserversService,
    
  ) {}
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
    customOrigin: new FormControl(""),
    customDestination: new FormControl(""),
    dateRequest: new FormControl(this.util.changeDate(new Date())),
    passengers: new FormControl(1)
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
      this.Seats.get("origin").setValue(this.places[0].id);
      this.Seats.get("destination").setValue(this.places[1].id);
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
      phone: ""
    });
    this.form.get("origin").setValue(this.places[0].id);
    this.form.get("destination").setValue(this.places[1].id);
  }
  defaultSeats() {
    this.Seats.reset({
      customOrigin: "",
      customDestination: "",
      dateRequest: this.util.changeDate(new Date()),
      passengers: 1
    });

    this.Seats.get("origin").setValue(this.places[0].id);
    this.Seats.get("destination").setValue(this.places[1].id);
  }
  
  seatsForm() {
    // console.log(`%c this.form.getRawValue() `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',this.Seats.getRawValue())
    // const token = sessionStorage.getItem("token");
    // if (!token) {
    //   this.srvObs.activeModal({ active: true, action: "" });
    //   return false;
    // }
    this.srv.searchFlights(this.Seats.getRawValue()).subscribe((data:any) => {
      console.log(
        `%c ladata `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
      this.defaultSeats();
      this.route.navigateByUrl("/reservation",data)
      // this.route.navigate(['action-selection'], {state:});
    });

    // this.srv.requestCharter(this.form.getRawValue()).subscribe(data => {
    //   this.sended = true;
    //   setTimeout(() => (this.sended = false), 3000);
    //   this.defaultRequest();
    // });
  }
  goTo(url) {
    this.route.navigate([url]);
  }
}
