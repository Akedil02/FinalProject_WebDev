import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourDetailsRoutingModule } from './tour-details-routing.module';
import { TourDetailsComponent } from './tour-details/tour-details.component';


@NgModule({
  declarations: [
    TourDetailsComponent
  ],
  imports: [
    CommonModule,
    TourDetailsRoutingModule
  ]
})
export class TourDetailsModule { }
