import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'tour-search', loadChildren: () => import('./tour-search/tour-search.module').then(m => m.TourSearchModule) },
  { path: 'tour-details/:id', loadChildren: () => import('./tour-details/tour-details.module').then(m => m.TourDetailsModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'reviews', loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
