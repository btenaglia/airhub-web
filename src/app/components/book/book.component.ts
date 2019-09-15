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

  constructor() {}

  ngOnInit() {}

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
}
