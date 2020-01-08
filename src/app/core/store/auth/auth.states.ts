import { createFeatureSelector } from '@ngrx/store';

import * as auth from './reducers/auth.reducers';


export interface CoursesState {
  authState: auth.AuthState;
}

export const reducers = {
  auth: auth.AuthReducer
};

export const selectAuthState = createFeatureSelector<CoursesState>('auth');
