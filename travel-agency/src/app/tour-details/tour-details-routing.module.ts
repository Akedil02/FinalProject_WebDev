import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourDetailsComponent } from './tour-details/tour-details.component';

const routes: Routes = [{ path: ':id', component: TourDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourDetailsRoutingModule { }
