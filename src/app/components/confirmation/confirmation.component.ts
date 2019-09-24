import { Component, OnInit, Input } from '@angular/core';
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  valid: boolean;
  flights: any;
  user : any = {}
  @Input() data : any = {}
  @Input() flight : any = {}
  constructor(private srv : ObserversService) { }

  ngOnInit() {
    console.log(`%c data en confirmacion`, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',this.data)
    console.log(`%c flight en confirmacion `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',this.flight)
    this.srv.getUser().subscribe(data => {
      this.user = data
      console.log(`%c this.user `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',this.user)
    })
    this.srv
    .searchWizzardGetValue()
    .subscribe((data: any) => {
      if(!data.flights || data.flights  == 0)
      this.valid = true
      this.flights = data
    });
  }

}
