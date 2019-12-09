import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {UserLoginComponent} from './features/login/user-login/user-login.component';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},

  {
    path: 'login',
    component: UserLoginComponent,
    data: { breadcrumb: 'Login' }
  },
  {
    path: 'courses',
    data: { breadcrumb: 'Courses' },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./features/course/course.module').then(mod => mod.CourseModule),
      },
      {
        path: 'new',
        loadChildren: () => import('./features/add-course/add-course.module').then(mod => mod.AddCourseModule),
        data: { breadcrumb: 'New' }
      },
      {
        path: ':id',
        loadChildren: () => import('./features/add-course/add-course.module').then(mod => mod.AddCourseModule),
        data: { breadcrumb: '' }
      },
    ]
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    data: { breadcrumb: '404' }
  },

  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
