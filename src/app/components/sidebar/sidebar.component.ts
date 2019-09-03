import { Component, OnInit, Input } from '@angular/core';
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  visible = false
  constructor(
    private srv : ObserversService
  ) { }

  ngOnInit() {
    this.srv.activeValue().subscribe(data => {
      this.visible = data
    })
  }
  close(){
    this.srv.activeSidebar(false)
  }
}
