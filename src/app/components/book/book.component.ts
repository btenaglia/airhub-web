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

  @Input() formRequest: FormGroup;
  @Input() formSeats: FormGroup;
  @Input() places: Array<any>;
  @Output() formValues = new EventEmitter<{}>();

  constructor(private srv: ApiService) {}

  ngOnInit() {
    this.formRequest.get("origin").valueChanges.subscribe(data => {
      console.log(
        `%c data `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
    });
    this.formRequest.get("destination").valueChanges.subscribe(data => {
      console.log(
        `%c data `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
    });
    this.formSeats.get("origin").valueChanges.subscribe(data => {
      console.log(
        `%c data `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
    });
    this.formSeats.get("destination").valueChanges.subscribe(data => {
      console.log(
        `%c data `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
    });
  }

  changeState(active) {
    this.active = active;
  }
  request() {
    this.formValues.emit(this.formRequest);
  }
}
