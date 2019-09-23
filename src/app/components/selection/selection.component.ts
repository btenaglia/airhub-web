import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";


@Component({
  selector: "app-selection",
  templateUrl: "./selection.component.html",
  styleUrls: ["./selection.component.scss"]
})
export class SelectionComponent implements OnInit {
  @Output() nextStep = new EventEmitter<number>();
  public valid = false
  public flights: Array<any> = [];

  constructor(private srv: ObserversService) {}

  ngOnInit() {
    this.srv
      .searchWizzardGetValue()
      .subscribe((data: any) => {
        if(!data.flights || data.flights  == 0)
        this.valid = true
        this.flights = data
      });
  }

  selectedFlight(flight){
     
    const token = sessionStorage.getItem("token");
    if (!token) {
      this.srv.activeModal({ active: true, action: "" });
      return false;
    }
    console.log(`%c flight `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',flight)
    this.nextStep.emit(flight);
    
  }
}
