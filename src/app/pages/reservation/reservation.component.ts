import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ObserversService } from "src/app/services/observers.service";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"]
})
export class ReservationComponent implements OnInit {
  constructor(private srvObs: ObserversService) {}

  ngOnInit() {
    this.srvObs
      .searchWizzardGetValue()
      .subscribe(data =>
        console.log(
          `%c data `,
          "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
          data
        )
      );
  }
}
