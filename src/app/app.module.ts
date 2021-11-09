
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
import { PopularDestinationComponent } from './travel/popular-destination/popular-destination.component';
import { RecentActivitiesComponent } from './travel/recent-activities/recent-activities.component';
import { PopularFoodComponent } from './travel/popular-food/popular-food.component';

import { SharedMaterialModule } from './shared-material/shared-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TransportComponent,
    AttractionsComponent,
    CuisinesComponent,
    TravelListComponent,
    PopularDestinationComponent,
    RecentActivitiesComponent,
    PopularFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
