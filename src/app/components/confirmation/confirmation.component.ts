import { Component, OnInit, Input } from '@angular/core';
import { ObserversService } from 'src/app/services/observers.service';
import { ApiService } from 'src/app/services/api.service';

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
  constructor(private srv : ObserversService,private apisrv : ApiService) { }

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
  send(){
    let payload = {}
    // {
    //   "user_id": "80",
    //   "origin_id": "2",
    //   "destination_id": "3",
    //   "seats": "2",
    //   "flight_id": 142,
    //   "body_weight": 215,
    //   "complete_name": "Campese, Bob",
    //   "luggage_weight": 16,
    //   "extras": [
    //     {
    //       "complete_name": "Juan test",
    //       "body_weight": 123,
    //       "luggage_weight": 44,
    //       "email": "qqqq@rrrr.com",
    //       "address": "irene curie, 139",
    //       "cell_phone": "654654654"
    //     }
    //   ],
    //   "seats_limit": 7,
    //   "weight_limit": 1000,
    //   "price": 617
    // }
    this.apisrv.reservation(payload).subscribe
  }

}
