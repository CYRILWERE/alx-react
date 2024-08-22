// task_6/dashboard/src/actions/courseActionCreators.js

import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

// Action creators
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}

// Bound action creators
export function boundSelectCourse(dispatch) {
  return bindActionCreators(selectCourse, dispatch);
}

export function boundUnSelectCourse(dispatch) {
  return bindActionCreators(unSelectCourse, dispatch);
}

