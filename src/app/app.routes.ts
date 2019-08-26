import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
const routes: Routes = [
  {
    // canActivate: [GuardserviceGuard],
    path: "",
    component: HomeComponent
  },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
