import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ObserversService } from "src/app/services/observers.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isMobile: boolean = true;

  constructor(private route: Router) {}

  ngOnInit() {
    var mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let carousel = document.getElementById("mobile");
    var maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft = maxScrollLeft / 2;

    if (screen.width > 900) {
      this.isMobile = false;
    }
  }
  goTo(url) {
    this.route.navigate([url]);
  }
}
