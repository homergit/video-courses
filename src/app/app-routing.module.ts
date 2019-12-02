import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoursesSectionComponent} from './features/course/courses-section/courses-section.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {UserLoginComponent} from './features/login/user-login/user-login.component';
import {AddCourseWindowComponent} from './features/add-course/add-course-window/add-course-window.component';
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
        component: CoursesSectionComponent,
      },
      {
        path: 'new',
        component: AddCourseWindowComponent,
        data: { breadcrumb: 'New' }
      },
      {
        path: ':id',
        component: AddCourseWindowComponent,
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
