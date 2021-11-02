import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttractionsComponent } from './attractions.component';

const routes: Routes = [
  {
    path: '',
    component: AttractionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttractionsRoutingModule { }
