import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelRoutingModule { }
