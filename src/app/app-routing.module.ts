import { NgModule }     from '@angular/core';
import {
  RouterModule, Routes,
} from '@angular/router';
import { PageNotFoundComponent }   from './not-found.component';
import {HomeComponent} from './subsystem/home/home.component'
const appRoutes: Routes = [
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: []
  },
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule'
  },
  { path: '',   component: HomeComponent},
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule {}
