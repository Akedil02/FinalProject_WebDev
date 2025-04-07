import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripSearchComponent } from './components/trip-search/trip-search.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: TripSearchComponent },
  { path: 'search', component: TripSearchComponent },
  { path: 'profile', component: UserProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}