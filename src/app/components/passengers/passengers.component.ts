import { Component, OnInit, Input, Output } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";
import { FormsModule, FormGroup } from "@angular/forms";
import { EventEmitter } from "@angular/core";
import { Utils } from 'src/app/services/utils';

@Component({
  selector: "app-passengers",
  templateUrl: "./passengers.component.html",
  styleUrls: ["./passengers.component.scss"]
})
export class PassengersComponent implements OnInit {
  flightData: any = {};
  user: any = {};
  price;
  inValid = false;
  validateMail = new Utils()
  @Input() flight: any = {};
  @Input() form: FormGroup;
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
    
    if (this.form.get("passengers").value.length > 0) {
      let valid = true
      this.form.get("passengers").value.map(data => {
        
        if(!this.validateMail.validateEmail(data['email'])){
          this.inValid = true
          valid = false
        }
        if(data['body_weight'] == 0){
          this.inValid = true
          valid = false
        }
        return Object.values(data).forEach(value => {
          if(value === "" || value === null){
            this.inValid = true
            valid =  false
          }
        })
      });
      if(!valid)
      return false
    }
    this.sendPassengers.emit(this.form.getRawValue());
  }
}
