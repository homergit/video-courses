import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { CoursesService } from '../../../services/courses.service';
import {
  CoursesActionTypes,
  ListFailure,
  ListRequest,
  ListSuccess,
  LoadMoreFailure,
  LoadMoreRequest,
  LoadMoreSuccess
} from '../actions/courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(
    private actions: Actions,
    private coursesService: CoursesService,
    private router: Router,
  ) {}

  @Effect()
  ListRequest: Observable<any> = this.actions.pipe(
    ofType(CoursesActionTypes.LIST_REQUEST),
    map((action: ListRequest) => action.payload),
    switchMap(payload => {
      return this.coursesService.getList(payload)
        .pipe(
          map((courses) => {
            return new ListSuccess({courses});
          }),
          catchError((err) => {
            return of(new ListFailure({error: err}));
          }));
    }));

  @Effect()
  LoadMoreRequest: Observable<any> = this.actions.pipe(
    ofType(CoursesActionTypes.LOAD_MORE_REQUEST),
    map((action: LoadMoreRequest) => action.payload),
    switchMap(payload => {
      return this.coursesService.getList(payload)
        .pipe(
          map((courses) => {
            return new LoadMoreSuccess({courses});
          }),
          catchError((err) => {
            return of(new LoadMoreFailure({error: err}));
          }));
    }));

  @Effect({dispatch: false})
  DeleteItem: Observable<any> = this.actions.pipe(
    ofType(CoursesActionTypes.DELETE_ITEM),
    tap((id) => {
      this.coursesService.removeItem(id.payload);
    })
  );
}
