import { Component, OnInit, Input, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {
  @Input() url = ""
  constructor(
    private sanitizer : DomSanitizer
  ) { }

  ngOnInit() {
        
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
