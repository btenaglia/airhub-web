import { Component, OnInit } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private srv: ObserversService) {}
  isVisible = true;
  openChild = false;
  ngOnInit() {}

  active() {
    this.srv.activeSidebar(true);
    this.srv.activeValue().subscribe(active => (this.isVisible = !active));
  }
  open() {
    this.openChild = true;
  }
  close() {
    this.openChild = false;
  }
}
