import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    query: new FormControl('',Validators.required)
  });
  constructor(private srv: ApiService) {}

  ngOnInit() {}

  send() {
    if(!this.form.valid)
    return false;
    this.srv.contact(this.form.value).subscribe(data => {
      console.log(
        `%c data `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
      this.form.reset();
    });
  }
}
