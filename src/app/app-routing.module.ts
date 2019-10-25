import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CoursesSectionComponent} from './features/course/courses-section/courses-section.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesSectionComponent},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
