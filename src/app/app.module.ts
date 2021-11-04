import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { TransportComponent } from './transport/transport.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { CuisinesComponent } from './cuisines/cuisines.component';

import { TravelListComponent } from './travel/travel-list/travel-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TransportComponent,
    AttractionsComponent,
    CuisinesComponent,
    TravelListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
