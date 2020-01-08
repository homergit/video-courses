import { All, CourseFormActionTypes } from '../actions/course-form.actions';
import {Course} from '../../../models/course';

export interface CourseFormState {
  isCourseAdded: boolean;
  course: Course | null;
  errorMessage: string | null;
}

export const initialState: CourseFormState = {
  isCourseAdded: false,
  course: null,
  errorMessage: null
};

export function CourseFormReducer(state = initialState, action: All): CourseFormState {
  switch (action.type) {
    case CourseFormActionTypes.COURSE_DATA_SUCCESS: {
      return {
        ...state,
        course: !!action.payload ? action.payload.courses : [],
        errorMessage: null
      };
    }
    case CourseFormActionTypes.COURSE_DATA_FAILURE: {
      return {
        ...state,
        errorMessage: 'Invalid data'
      };
    }
    case CourseFormActionTypes.SAVE_DATA_SUCCESS: {
      return {
        ...state,
        course: action.payload.course,
        errorMessage: null
      };
    }
    case CourseFormActionTypes.SAVE_DATA_FAILURE: {
      return {
        ...state,
        errorMessage: 'Invalid save data'
      };
    }
    default: {
      return state;
    }
  }
}
