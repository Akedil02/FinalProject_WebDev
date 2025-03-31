import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TourSearchRoutingModule } from './tour-search-routing.module';
import { TourSearchComponent } from './tour-search/tour-search.component';


@NgModule({
  declarations: [
    TourSearchComponent
  ],
  imports: [
    CommonModule,
    TourSearchRoutingModule
  ]
})
export class TourSearchModule { }
