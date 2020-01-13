import { All, CoursesActionTypes } from '../actions/courses.actions';
import {Course} from '../../../models/course';

export interface CoursesState {
  isDataAvailable: boolean;
  courses: Course[] | null;
  errorMessage: string | null;
}

export const initialState: CoursesState = {
  isDataAvailable: false,
  courses: null,
  errorMessage: null
};

export function CoursesReducer(state = initialState, action: All): CoursesState {
  switch (action.type) {
    case CoursesActionTypes.LIST_SUCCESS: {
      return {
        ...state,
        isDataAvailable: true,
        courses: action.payload.courses,
        errorMessage: null
      };
    }
    case CoursesActionTypes.LIST_FAILURE: {
      return {
        ...state,
        errorMessage: 'Invalid data'
      };
    }
    case CoursesActionTypes.LOAD_MORE_SUCCESS: {
      return {
        ...state,
        isDataAvailable: true,
        courses: [...state.courses.concat(action.payload.courses)],
        errorMessage: null
      };
    }
    case CoursesActionTypes.LOAD_MORE_FAILURE: {
      return {
        ...state,
        errorMessage: 'Invalid load more data'
      };
    }
    case CoursesActionTypes.DELETE_ITEM: {
      return {
        ...state,
        courses: [...state.courses.filter(item => item.id !== action.payload)]
      };
    }
    default: {
      return state;
    }
  }
}
