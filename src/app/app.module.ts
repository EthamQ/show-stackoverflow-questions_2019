import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchService} from "./core/services/search.service";
import {AppRoutingModule} from "./app.routing.module";
import {LayoutModule} from "./core/layout/layout.module";
import { SearchComponent } from './search/search.component';
import { DashboardComponent } from './dashboard-folder/dashboard/dashboard.component';
import { SearchItemsCardComponent } from './dashboard-folder/search-items-card/search-items-card.component';
import { SearchItemComponent } from './dashboard-folder/search-item/search-item.component';
import { LimitElementsPipe } from './pipes/limit-elements.pipe';
import { JsonService } from './core/services/json.service';
import { WeatherItemsCardComponent } from './dashboard-folder/weather-items-card/weather-items-card.component';
import { WeatherItemComponent } from './dashboard-folder/weather-item/weather-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    SearchItemsCardComponent,
    SearchItemComponent,
    LimitElementsPipe,
    WeatherItemsCardComponent,
    WeatherItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    LayoutModule,
    AppRoutingModule
  ],
  providers: [SearchService, JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
