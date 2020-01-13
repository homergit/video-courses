import {createFeatureSelector} from '@ngrx/store';
import {CoursesState} from './courses/reducers/courses.reducers';
import {CourseFormState} from './course-form/reducers/course-form.reducers';

import * as auth from './auth/reducers/auth.reducers';
import * as courses from './courses/reducers/courses.reducers';
import * as courseForm from './course-form/reducers/course-form.reducers';

export interface AppState {
  authState: auth.AuthState;
  coursesState: courses.CoursesState;
  courseActionsState: CourseFormState;
}

export const reducers = {
  auth: auth.AuthReducer,
  courses: courses.CoursesReducer,
  courseActions: courseForm.CourseFormReducer
};

export const selectAuthState = createFeatureSelector<AppState>('auth');
export const selectCoursesState = createFeatureSelector<CoursesState>('courses');
export const selectCourseFormState = createFeatureSelector<CourseFormState>('course-form');
