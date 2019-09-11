import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { GeneralComponent } from "./general/general.component";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { BookComponent } from "../components/book/book.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { OurFleetComponent } from "./our-fleet/our-fleet.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { PrivateCharterComponent } from "./private-charter/private-charter.component";
import { CharterClubComponent } from "./charter-club/charter-club.component";
import { AirFreightComponent } from "./air-freight/air-freight.component";


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
  },
  {
    path: "about-us",
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: AboutUsComponent
      }
    ]
  },
  {
    path: "our-fleet",
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: OurFleetComponent
      }
    ]
  },
  {
    path: "contact-us",
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: ContactUsComponent
      }
    ]
  },
  {
    path: "private-charter",
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: PrivateCharterComponent
      }
    ]
  },
  {
    path: "air-freight",
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: AirFreightComponent
      }
    ]
  },
  {
    path: "charter-club",
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: CharterClubComponent
      }
    ]
  }
];
@NgModule({
  declarations: [
    HomeComponent,
    GeneralComponent,
    HeaderComponent,
    FooterComponent,
    BookComponent,
    SidebarComponent,
    AboutUsComponent,
    OurFleetComponent,
    ContactUsComponent,
    PrivateCharterComponent,
    CharterClubComponent,
    AirFreightComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PagesModule {}
