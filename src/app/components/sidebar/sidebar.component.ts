import { Component, OnInit, ElementRef, HostListener } from "@angular/core";
import { ObserversService } from "src/app/services/observers.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  visible = false;
  open = false;
  openUser = false;
  constructor(private srv: ObserversService, private eRef: ElementRef) {}
  userLogged = {
    name: ""
  };
  ngOnInit() {
    this.srv.activeValue().subscribe(data => {
      this.visible = data;
    });
    this.srv.getUser().subscribe((data: any) => {
     
      this.userLogged = data;
    });
  }
  close() {
    this.srv.activeSidebar(false);
  }

  account(){
    this.srv.activeModal(true);
  }
 
  openChild() {
    this.open = !this.open;
  }
  openChildUser() {
    this.openUser = !this.openUser;
  }
  openModal(action) {
    this.srv.activeModal({ active: true, action: action });
  }
  
  logOut() {
    this.srv.setUser({});
    sessionStorage.removeItem("token");
  }
}
