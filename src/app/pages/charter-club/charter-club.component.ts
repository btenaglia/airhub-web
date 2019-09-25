import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Utils } from "src/app/services/utils";
import { ApiService } from 'src/app/services/api.service';
import { ObserversService } from 'src/app/services/observers.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-charter-club",
  templateUrl: "./charter-club.component.html",
  styleUrls: ["./charter-club.component.scss"]
})
export class CharterClubComponent implements OnInit {
  util = new Utils();
  places = []
  validateSeats: boolean = false;
  currentlyDate = "";
  validateDeparture = false;

  public seatsForm = new FormGroup({
    origin: new FormControl(),
    destination: new FormControl(),
    customOrigin: new FormControl(""),
    customDestination: new FormControl(""),
    dateRequest: new FormControl(this.util.changeDate(new Date())),
    passengers: new FormControl(1)
    
  });
  constructor(
    private srv : ApiService,
    private srvOb : ObserversService,
    private route : Router
  ) {}

  ngOnInit() {

    this.srv.getPlaces().subscribe((data: any) => {
      this.places = data.data;
      this.seatsForm.get('origin').setValue(this.places[0].id)
      this.seatsForm.get('destination').setValue(this.places[1].id)
    });
  }
  sendForm() {
    if (this.validateDeparture) {
      return false;
    }
    if (!this.seatsForm.valid) {
      this.validateSeats = true;
      return false;
    }
    if (
      this.seatsForm.get("origin").value == 0 &&
      this.seatsForm.get("customOrigin").value == ""
    ) {
      this.validateSeats = true;
      return false;
    }
    if (
      this.seatsForm.get("destination").value == 0 &&
      this.seatsForm.get("customDestination").value == ""
    ) {
      this.validateSeats = true;
      return false;
    }

    

    this.srv.searchFlights(this.seatsForm.getRawValue()).subscribe((data: any) => {
      console.log(
        `%c ladata `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
      this.defaultSeats();
      this.srvOb.searchWizzard(data.data);
      this.route.navigateByUrl("/reservation");
      
      this.validateSeats = false;
    });
  }
    defaultSeats() {
      this.seatsForm.reset({
        customOrigin: "",
        customDestination: "",
        dateRequest: this.util.changeDate(new Date()),
        passengers: 1
      });
  
      this.seatsForm.get("origin").setValue(this.places[0].id);
      this.seatsForm.get("destination").setValue(this.places[1].id);
    }
  openLink(link) {
    window.open(link, "_blank");
  }
}
