import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  public steps = [{ index: 1, name: "charter" }, { index: 2, name: "charter" }];
  public active = 1;
  validate = false;
  @Input() formRequest: FormGroup;
  @Input() formSeats: FormGroup;
  @Input() places: Array<any>;
  @Output() formValues = new EventEmitter<{}>();
  @Output() formSeatsValues = new EventEmitter<{}>();
  validateSeats: boolean = false;
  currentlyDate = ""
  validateDeparture = false
  constructor() {}

  ngOnInit() {
    this.currentlyDate = Object.assign({},this.formSeats.get('dateRequest')).value
  
    this.formSeats.controls['dateRequest'].valueChanges.subscribe(value => {
      
      if(this.currentlyDate > value)
      this.validateDeparture = true
      else 
      this.validateDeparture = false
      // whole form object is in value and it's called every time any form field changes.
    });
    
  }

  changeState(active) {
    this.active = active;
  }
  request() {
    if (!this.formRequest.valid) {
      this.validate = true;
      return false;
    }
    if (
      this.formRequest.get("origin").value == 0 &&
      this.formRequest.get("customOrigin").value == ""
    ) {
      this.validate = true;
      return false;
    }
    if (
      this.formRequest.get("destination").value == 0 &&
      this.formRequest.get("customDestination").value == ""
    ) {
      this.validate = true;
      return false;
    }

    this.formValues.emit(this.formRequest);
    this.validate = false
  }
  seats() {
    if(this.validateDeparture){
      return false
    }
    if (!this.formSeats.valid) {
      this.validateSeats = true;
      return false;
    }
    if (
      this.formSeats.get("origin").value == 0 &&
      this.formSeats.get("customOrigin").value == ""
    ) {
      this.validateSeats = true;
      return false;
    }
    if (
      this.formSeats.get("destination").value == 0 &&
      this.formSeats.get("customDestination").value == ""
    ) {
      this.validateSeats = true;
      return false;
    }

    this.formSeatsValues.emit(this.formSeats);
    this.validateSeats = false
  }
}
