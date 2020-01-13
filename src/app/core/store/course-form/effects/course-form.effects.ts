import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {map, switchMap, catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  CourseFormActionTypes, CourseDataFailure, CourseDataSuccess, GetData, SaveData, SaveDataFailure, SaveDataSuccess
} from '../actions/course-form.actions';
import {CoursesService} from '../../../services/courses.service';

@Injectable()
export class CourseFormEffects {
  constructor(
    private actions: Actions,
    private router: Router,
    private coursesService: CoursesService,
  ) {}

  @Effect()
  GetData: Observable<any> = this.actions.pipe(
    ofType(CourseFormActionTypes.GET_DATA),
    map((action: GetData) => action.payload),
    switchMap(payload => {
      return this.coursesService.getItem(payload)
        .pipe(
          map((courses) => {
            return new CourseDataSuccess({courses});
          }),
          catchError((err) => {
            return of(new CourseDataFailure({error: err}));
          }));
    }));

  @Effect()
  SaveData: Observable<any> = this.actions.pipe(
    ofType(CourseFormActionTypes.SAVE_DATA),
    map((action: SaveData) => action.payload),
    switchMap(payload => {
      return this.coursesService.createCourse(payload.value, payload.id)
        .pipe(
          map((course) => {
            return new SaveDataSuccess({course});
          }),
          catchError((err) => {
            return of(new SaveDataFailure({error: err}));
          }));
    }));

  @Effect({ dispatch: false })
  SaveDataSuccess: Observable<any> = this.actions.pipe(
    ofType(CourseFormActionTypes.SAVE_DATA_SUCCESS),
    tap(() => {
      this.router.navigateByUrl('/');
    })
  );
}
