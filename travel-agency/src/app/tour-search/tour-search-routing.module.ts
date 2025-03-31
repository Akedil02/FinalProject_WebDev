import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourSearchComponent } from './tour-search/tour-search.component';

const routes: Routes = [{ path: '', component: TourSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourSearchRoutingModule { }
