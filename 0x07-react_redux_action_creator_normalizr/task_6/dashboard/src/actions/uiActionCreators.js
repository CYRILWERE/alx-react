// task_6/dashboard/src/actions/uiActionCreators.js

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';
import { bindActionCreators } from 'redux';

// Action creators
export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password,
    },
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

// Bound action creators
export function boundLogin(dispatch) {
  return bindActionCreators(login, dispatch);
}

export function boundLogout(dispatch) {
  return bindActionCreators(logout, dispatch);
}

export function boundDisplayNotificationDrawer(dispatch) {
  return bindActionCreators(displayNotificationDrawer, dispatch);
}

export function boundHideNotificationDrawer(dispatch) {
  return bindActionCreators(hideNotificationDrawer, dispatch);
}

