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
  userLogged = {}
  ngOnInit(
    
  ) {
    this.srv.getUser().subscribe((data:any) => {this.userLogged = data.user,console.log(`%c this.userLogged `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',this.userLogged)})
  }

  active() {
    this.srv.activeSidebar(true);
    this.srv.activeValue().subscribe(active => (this.isVisible = !active));
  }
  open() {
    this.openChild = true;
  }
  openModal(){
    this.srv.activeModal(true);
  }
  close() {
    this.openChild = false;
  }
}
