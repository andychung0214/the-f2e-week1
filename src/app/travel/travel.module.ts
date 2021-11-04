import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { TravelListComponent } from './travel-list/travel-list.component';
import { PopularFoodComponent } from './popular-food/popular-food.component';
import { PopularDestinationComponent } from './popular-destination/popular-destination.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';


@NgModule({
  declarations: [TravelListComponent, PopularFoodComponent, PopularDestinationComponent, RecentActivitiesComponent],
  imports: [
    CommonModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }
