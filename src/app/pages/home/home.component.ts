import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ObserversService } from "src/app/services/observers.service";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  isMobile: boolean = true;

  constructor(private route: Router, private srv: ApiService) {}

  ngOnInit() {
    var mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let carousel = document.getElementById("mobile");
    var maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollLeft = maxScrollLeft / 2;

    if (screen.width > 900) {
      this.isMobile = false;
    }
    this.srv.getPlaces().subscribe(data => console.log(`%c data `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',data))
  }
  goTo(url) {
    this.route.navigate([url]);
  }
}
