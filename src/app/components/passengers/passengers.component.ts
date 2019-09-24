import { Component, OnInit, Input, Output } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";
import { FormsModule, FormGroup } from '@angular/forms';
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-passengers",
  templateUrl: "./passengers.component.html",
  styleUrls: ["./passengers.component.scss"]
})
export class PassengersComponent implements OnInit {
  flightData: any = {};
  user: any = {};
  price;
  public arrayPassenger: any = [];
  passenger: any = {
    complete_name: "",
    body_weight: 0,
    luggage_weight: 0,
    email: "",
    address: "",
    cell_phone: ""
  };

  @Input() flight: any = {};
  @Input() form: FormGroup
  @Output() sendPassengers = new EventEmitter<[]>();
  constructor(private srvObs: ObserversService) {}
  ngOnInit() {
    this.srvObs.searchWizzardGetValue().subscribe(data => {
      this.flightData = data;
    });
    this.srvObs.getUser().subscribe(data => {
      this.user = data;
      if (this.user.hasOwnProperty("get_member"))
        this.price =
          this.flight.price - this.flight.price * this.user.get_member.discount;
      else this.price = this.flight.price;
     
    });
  }
  send() {
    this.sendPassengers.emit(this.form.getRawValue());
    
  }
}
