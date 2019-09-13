import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"]
})
export class ContactUsComponent implements OnInit {
  validate = false
  validateEmail = false
  sending = false
  form = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',Validators.required),
    query: new FormControl('',Validators.required)
  });
  constructor(private srv: ApiService) {}

  ngOnInit() {}

  send() {
    if(!this.form.valid){
      this.validateEmail = this.form.get('email').valid
      this.validate = true
      return false;
    }
    this.sending = true
    this.srv.contact(this.form.value).subscribe(data => {
      console.log(
        `%c data `,
        "color:#9d86c5; font-size:12px; padding:2px 4px; background: #292828; border-radius:4px;",
        data
      );
      this.form.reset();
      this.sending = false
    },err => this.sending = false);
  }
}
