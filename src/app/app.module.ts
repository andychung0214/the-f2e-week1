import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

import { TravelHeaderComponent } from './travel/travel-header/travel-header.component';
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
    TravelListComponent,
    PopularDestinationComponent,
    RecentActivitiesComponent,
    PopularFoodComponent,
    TravelHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
