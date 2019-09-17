import {
  Component,
  OnInit 
} from "@angular/core";
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent implements OnInit {
  


  ngAfterViewInit() {
    
  }
  constructor(
    public srv : ObserversService
  ) {}

  ngOnInit() {}
}
