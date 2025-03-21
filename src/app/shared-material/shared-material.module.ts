import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav'; // Import MatSidenavModule from the correct location
import {MatGridListModule} from '@angular/material/grid-list'; // Import MatGridListModule from the correct location

import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule}  from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule}  from '@angular/material/select';

import {MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatRadioModule} from '@angular/material/radio';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatRippleModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  exports:[MatFormFieldModule,MatSelectModule,MatIconModule,MatButtonToggleModule,MatSidenavModule,MatGridListModule,MatButtonModule,MatRippleModule,MatToolbarModule,MatListModule,MatStepperModule,MatInputModule,MatAutocompleteModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,MatRadioModule,MatSlideToggleModule]
})
export class SharedMaterialModule { }
