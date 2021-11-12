import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';

import { TravelModule } from './travel/travel.module';

import { SharedMaterialModule } from './shared-material/shared-material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogComponentComponent } from './shared-material/mat-dialog-component/mat-dialog-component.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MatDialogComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TravelModule,
    SharedMaterialModule,
    NoopAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MatDialogComponentComponent]
})
export class AppModule { }
