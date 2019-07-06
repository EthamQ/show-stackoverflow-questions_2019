import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SearchComponent} from "./search/search.component";
import { DashboardComponent } from "./dashboard-folder/dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent},
  { path: "search", component: SearchComponent },
  { path: "**", component: DashboardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
