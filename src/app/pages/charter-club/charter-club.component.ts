import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Utils } from "src/app/services/utils";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: "app-charter-club",
  templateUrl: "./charter-club.component.html",
  styleUrls: ["./charter-club.component.scss"]
})
export class CharterClubComponent implements OnInit {
  util = new Utils();
  places = []
  public seatsForm = new FormGroup({
    origin: new FormControl(),
    destination: new FormControl(),
    customOrigin: new FormControl(),
    customDestination: new FormControl(),
    dateRequest: new FormControl(this.util.changeDate(new Date())),
    flexible: new FormControl(true)
  });
  constructor(
    private srv : ApiService
  ) {}

  ngOnInit() {

    this.srv.getPlaces().subscribe((data: any) => {
      this.places = data.data;
      this.seatsForm.get('origin').setValue(this.places[0].id)
      this.seatsForm.get('destination').setValue(this.places[1].id)
    });
  }
  openLink(link) {
    window.open(link, "_blank");
  }
}
