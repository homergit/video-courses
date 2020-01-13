import {createFeatureSelector} from '@ngrx/store';
import {CoursesReducer, CoursesState} from './reducers/courses.reducers';

export interface CourseState {
  courseFormState: CoursesState;
}

export const reducers = {
  courseForm: CoursesReducer
};

export const selectCourseFormState = createFeatureSelector<CourseState>('course');
