import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ObserversService } from "src/app/services/observers.service";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.scss"]
})
export class ReservationComponent implements OnInit {
  public selected = 1;
  constructor(private srvObs: ObserversService, private fb: FormBuilder) {}
  selectedFlight = {};
  arrayp = [];
  completedPassengers: any = {};
  passenger: any = {
    complete_name: "",
    body_weight: "",
    luggage_weight:"",
    email: "",
    address: "",
    cell_phone: ""
  };
  form: FormGroup;

  ngOnInit() {
    this.srvObs.searchWizzardGetValue().subscribe((data: any) => {
      if (data.passengers - 1 > 0) {
        for (let i = 0; i < data.passengers - 1; i++) {
          this.arrayp.push(this.createItem());
        }
      }

      this.form = this.fb.group({
        notravel: this.fb.control(false),
        luggage_weight: this.fb.control(""),
        passengers: this.fb.array(this.arrayp)
      });
    });
  }
  createItem(): FormGroup {
    return this.fb.group(this.passenger);
  }
  nextStep(data) {
    this.selectedFlight = data;
    this.selected = 2;
  }
  valuesPassengers(data) {
    this.completedPassengers = data;
    this.selected = 3;
  }
  navigate(step){
        
    this.selected = step >= this.selected ? this.selected : step
  }
}
