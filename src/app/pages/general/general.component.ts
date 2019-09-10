import { Component, OnInit } from '@angular/core';
import { ObserversService } from 'src/app/services/observers.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  swipeCoord: [number, number];
  swipeTime: number;
 

  constructor(
    private apearSv: ObserversService
  ) { }

  ngOnInit() {
  }
  swipe(e: TouchEvent, when: string): void {
    
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    console.log(`%c coord `, 'color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;',coord)
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
          const swipe = direction[0] < 0 ? 'next' : 'previous';
          if(swipe == 'next')
          this.apearSv.activeSidebar(false)
          else
          this.apearSv.activeSidebar(true)
          // Do whatever you want with swipe
      }
    }
  }
}
