import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CoursesSectionComponent} from './features/course/courses-section/courses-section.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {UserLoginComponent} from './features/login/user-login/user-login.component';
import {AddCourseWindowComponent} from './features/add-course/add-course-window/add-course-window.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},

  {path: 'courses', component: CoursesSectionComponent},
  {path: 'login', component: UserLoginComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: 'add-course', component: AddCourseWindowComponent},

  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
