import { Component, OnInit } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";

@Component({
  selector: "app-selection",
  templateUrl: "./selection.component.html",
  styleUrls: ["./selection.component.scss"]
})
export class SelectionComponent implements OnInit {
  constructor(private srv: ObserversService) {}

  public flights: Array<any> = [];
  ngOnInit() {
    this.srv
      .searchWizzardGetValue()
      .subscribe((data: any) => (this.flights = data));
  }
}
