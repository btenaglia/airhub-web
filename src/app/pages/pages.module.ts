import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { GeneralComponent } from "./general/general.component";
import { Routes, RouterModule } from "@angular/router";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { BookComponent } from '../components/book/book.component';

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
    FooterComponent,
    BookComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class PagesModule {}
