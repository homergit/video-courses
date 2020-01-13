import {createFeatureSelector} from '@ngrx/store';
import {CourseFormReducer, CourseFormState} from './reducers/course-form.reducers';

export interface CoursesState {
  courseFormState: CourseFormState;
}

export const reducers = {
  courseForm: CourseFormReducer
};

export const selectCourseFormState = createFeatureSelector<CoursesState>('course-form');
