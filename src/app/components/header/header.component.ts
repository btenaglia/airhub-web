import { Component, OnInit } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(public srv: ObserversService) {}
  isVisible = true;
  openChild = false;
  openChildUser = false;
  userLogged = {
    name: ""
  };
  ngOnInit() {
    this.srv.getUser().subscribe((data: any) => {
     
      this.userLogged = data;
    });
  }

  active() {
    this.srv.activeSidebar(true);
    this.srv.activeValue().subscribe(active => (this.isVisible = !active));
  }
  open(place) {
    if (place) {
      this.openChildUser = true;
      return;
    }
    this.openChild = true;
  }
  openModal(action) {
    this.srv.activeModal({ active: true, action: action });
  }
  close(place) {
    if (place) {
      this.openChildUser = false;
      return;
    }
    this.openChild = false;
  }
  logOut() {
    this.srv.setUser({});
    sessionStorage.removeItem("token");
  }
}
