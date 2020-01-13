import { Action } from '@ngrx/store';
import * as courses from '../reducers/courses.reducers';

export interface AppState {
  coursesState: courses.CoursesState;
}

export enum CoursesActionTypes {
  DELETE_ITEM = '[Courses] Delete Item',
  LIST_REQUEST = '[Courses] Get Course List',
  LIST_SUCCESS = '[Courses] Set Course List',
  LIST_FAILURE = '[Courses] Failed Course Data',
  LOAD_MORE_REQUEST = '[Courses] Load More Request',
  LOAD_MORE_SUCCESS = '[Courses] Load More Data',
  LOAD_MORE_FAILURE = '[Courses] Failed Load More Data'
}

export class ListRequest implements Action {
  readonly type = CoursesActionTypes.LIST_REQUEST;
  constructor(public payload: any) {}
}

export class ListSuccess implements Action {
  readonly type = CoursesActionTypes.LIST_SUCCESS;
  constructor(public payload: any) {}
}

export class ListFailure implements Action {
  readonly type = CoursesActionTypes.LIST_FAILURE;
  constructor(public payload: any) {}
}

export class LoadMoreRequest implements Action {
  readonly type = CoursesActionTypes.LOAD_MORE_REQUEST;
  constructor(public payload: any) {}
}

export class LoadMoreSuccess implements Action {
  readonly type = CoursesActionTypes.LOAD_MORE_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadMoreFailure implements Action {
  readonly type = CoursesActionTypes.LOAD_MORE_FAILURE;
  constructor(public payload: any) {}
}

export class DeleteItem implements Action {
  readonly type = CoursesActionTypes.DELETE_ITEM;
  constructor(public payload: any) {}
}

export type All = DeleteItem | ListRequest | ListSuccess | ListFailure | LoadMoreRequest | LoadMoreSuccess
  | LoadMoreFailure;
