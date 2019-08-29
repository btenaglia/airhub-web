import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { AngularFontAwesomeModule } from "angular-font-awesome";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngularFontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
