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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from '../components/login/login.component';
import { ModalComponent } from '../components/modal/modal.component';
import { FormLoginComponent } from '../components/form-login/form-login.component';
import { ReservationComponent } from './reservation/reservation.component';

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
  },
  {
    path: "reservation",
    data:{},
    component: GeneralComponent,
    children: [
      {
        path: "",
        component: ReservationComponent
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
    AirFreightComponent,
    LoginComponent,
    ModalComponent,
    FormLoginComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {}
