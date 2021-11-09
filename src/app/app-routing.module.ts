
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { RecentActivitiesComponent } from './travel/recent-activities/recent-activities.component';
import { PopularFoodComponent } from './travel/popular-food/popular-food.component';
import { PopularDestinationComponent } from './travel/popular-destination/popular-destination.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'travel-list',
        component: TravelListComponent
      },
      {
        path: 'popular-destination',
        component: PopularDestinationComponent
      },
      {
        path: 'popular-food',
        component: PopularFoodComponent
      },
      {
        path: 'recent-activities',
        component: RecentActivitiesComponent
      },
      {
        path: '',
        redirectTo: 'attractions',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
