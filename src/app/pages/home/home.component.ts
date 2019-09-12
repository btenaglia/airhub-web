import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ObserversService } from "src/app/services/observers.service";
import { ApiService } from "src/app/services/api.service";
import { FormGroup, FormControl } from "@angular/forms";
import {Utils} from 'src/app/services/utils';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isMobile: boolean = true;
  places = [];
  private util = new Utils()
  constructor(private route: Router, private srv: ApiService) {}
  public form = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    origin: new FormControl(),
    destination: new FormControl(),
    customOrigin: new FormControl(),
    customDestination: new FormControl(),
    dateRequest : new FormControl(this.util.changeDate(new Date())),
    timeRequest : new FormControl("12:00")
  });
  public Seats = new FormGroup({
    
    origin: new FormControl(),
    destination: new FormControl(),
    customOrigin: new FormControl(),
    customDestination: new FormControl(),
    dateRequest : new FormControl(this.util.changeDate(new Date())),
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
      this.form.get('origin').setValue(this.places[0].id)
      this.form.get('destination').setValue(this.places[1].id)
    });
  }
  formulario(form) {
    console.log(
      `%c form `,
      "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
      form
    );
  }
  goTo(url) {
    this.route.navigate([url]);
  }
}

