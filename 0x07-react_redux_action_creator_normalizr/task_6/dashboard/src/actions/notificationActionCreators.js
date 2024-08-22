// task_6/dashboard/src/actions/notificationActionCreators.js

import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

// Action creators
export function markAsRead(index) {
  return {
    type: MARK_AS_READ,
    index,
  };
}

export function setNotificationFilter(filter) {
  return {
    type: SET_TYPE_FILTER,
    filter,
  };
}

// Bound action creators
export function boundMarkAsRead(dispatch) {
  return bindActionCreators(markAsRead, dispatch);
}

export function boundSetNotificationFilter(dispatch) {
  return bindActionCreators(setNotificationFilter, dispatch);
}

