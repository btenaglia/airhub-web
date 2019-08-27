import { Routes, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
const routes: Routes = [
  {
    // canActivate: [GuardserviceGuard],
    path: "",
    
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule'
        
      }]
  },

  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
