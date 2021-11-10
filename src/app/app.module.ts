import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';

import { TravelModule } from './travel/travel.module';


import { SharedMaterialModule } from './shared-material/shared-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModule,
    NoopAnimationsModule,
    HttpClientModule,
    TravelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
