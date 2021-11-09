import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelListComponent } from './travel-list/travel-list.component';
import { PopularFoodComponent } from './popular-food/popular-food.component';
import { PopularDestinationComponent } from './popular-destination/popular-destination.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { TravelHeaderComponent } from './travel-header/travel-header.component';



@NgModule({
  declarations: [
    TravelListComponent,
    PopularFoodComponent,
    PopularDestinationComponent,
    RecentActivitiesComponent,
    TravelHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class TravelModule { }
