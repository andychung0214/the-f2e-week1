import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { TransportComponent } from './transport/transport.component';
import { CuisinesComponent } from './cuisines/cuisines.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'attractions',
        component: AttractionsComponent
      },
      {
        path: 'transport',
        component: TransportComponent
      },
      {
        path: 'cuisines',
        component: CuisinesComponent
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
