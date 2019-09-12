import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ObserversService } from "src/app/services/observers.service";
import { ApiService } from "src/app/services/api.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isMobile: boolean = true;
  public form = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    origin: new FormControl(1),
    destination: new FormControl(2)
  });
  constructor(private route: Router, private srv: ApiService) {}

  ngOnInit() {
    let carousel = document.getElementById("mobile");
    var maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft = maxScrollLeft / 2;

    if (screen.width > 900) {
      this.isMobile = false;
    }
  }
  formulario(form){
    console.log(`%c form `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',form)
  }
  goTo(url) {
    this.route.navigate([url]);
  }
}
