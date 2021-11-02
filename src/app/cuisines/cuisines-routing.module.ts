import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuisinesComponent } from './cuisines.component';

const routes: Routes = [
  {
    path: '',
    component: CuisinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisinesRoutingModule { }
