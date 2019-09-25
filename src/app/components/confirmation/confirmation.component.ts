import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-confirmation",
  templateUrl: "./confirmation.component.html",
  styleUrls: ["./confirmation.component.scss"]
})
export class ConfirmationComponent implements OnInit {
  valid: boolean;
  flights: any;
  user: any = {};
  @Input() data: any = {};
  @Input() flight: any = {};
  @Output() getUrl = new EventEmitter<string>();
  constructor(private srv: ObserversService, private apisrv: ApiService) {}

  ngOnInit() {
    console.log(
      `%c data en confirmacion`,
      "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
      this.data
    );
    console.log(
      `%c flight en confirmacion `,
      "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
      this.flight
    );
    this.srv.getUser().subscribe(data => {
      this.user = data;
      console.log(
        `%c this.user `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        this.user
      );
    });
    this.srv.searchWizzardGetValue().subscribe((data: any) => {
      if (!data.flights || data.flights == 0) this.valid = true;
      this.flights = data;
      console.log(
        `%c this.flights `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        this.flights
      );
    });
  }
  send() {
    let payload = {
      user_id: this.user.id,
      origin_id: this.flight.origin,
      destination_id: this.flight.destination,
      seats: this.flights.passengers,
      notravel: this.flight.notravel,
      flight_id: this.flight.id,
      body_weight: this.user.body_weight,
      complete_name: this.user.complete_name,
      luggage_weight: this.data.luggage_weight,
      extras: this.data.passengers,
      seats_limit: this.flight.get_plane.seats_limit,
      weight_limit: this.flight.get_plane.weight_limit,
      price: this.flight.price
    };

    this.apisrv.reservation(payload).subscribe((data: any) => {
      this.getUrl.emit(data.data);
    });
  }
}
