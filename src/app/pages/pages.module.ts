import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { GeneralComponent } from "./general/general.component";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../component/footer/footer.component";

const routes: Routes = [
  {
    path: "",
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    HomeComponent,
    GeneralComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PagesModule {}
