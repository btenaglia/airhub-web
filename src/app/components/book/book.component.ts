import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
  public steps = [{ index: 1, name: "charter" }, { index: 2, name: "charter" }];
  public active = 1;
  public places = [];
  constructor(private srv: ApiService) {}

  ngOnInit() {
    this.srv.getPlaces().subscribe((data: any) => (this.places = data.data));
  }

  changeState(active) {
    this.active = active;
  }
}
