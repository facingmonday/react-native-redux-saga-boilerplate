import {
  FETCH_ME,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from '../constants/auth';

export function fetchMe() {
  return {
    type: FETCH_ME,
  };
}
export function fetchMeSuccess(me) {
  return {
    type: FETCH_ME_SUCCESS,
    me,
  };
}
export function fetchMeFailure(error) {
  return {
    type: FETCH_ME_FAILURE,
    error,
  };
}

export function loginUser(credentials) {
  return {
    type: LOGIN_USER,
    credentials,
  };
}
export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    user,
  };
}
export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    error,
  };
}
