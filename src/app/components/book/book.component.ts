import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  public steps = [{ index: 1, name: "charter" }, { index: 2, name: "charter" }];
  public active = 1;
  constructor() {}

  ngOnInit() {}

  changeState(active) {
    this.active = active;
  }
}
