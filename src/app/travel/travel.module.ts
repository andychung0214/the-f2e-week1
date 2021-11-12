import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelHeaderComponent } from './travel-header/travel-header.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { PopularFoodComponent } from './popular-food/popular-food.component';
import { PopularDestinationComponent } from './popular-destination/popular-destination.component';
import { RecentActivitiesComponent } from './recent-activities/recent-activities.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';

import { SharedMaterialModule } from '../shared-material/shared-material.module';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations:
  [
    TravelHeaderComponent,
    TravelListComponent,
    PopularFoodComponent,
    PopularDestinationComponent,
    RecentActivitiesComponent,
    TravelDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ],
  exports:[TravelHeaderComponent]
})
export class TravelModule { }
