import {
  FETCH_USERS, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_LOADING, RESET_USERS,
  FETCH_USER, FETCH_USER_SUCCESS, FETCH_USER_FAILURE, FETCH_USER_LOADING, RESET_ACTIVE_USER,
  CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, RESET_NEW_USER,
  UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
  DELETE_USER, DELETE_USER_SUCCESS, DELETE_USER_FAILURE, RESET_DELETED_USER,
  LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, RESET_LOGGED_IN_USER,
  REGISTER_USER, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE,
  FETCH_ME, FETCH_ME_SUCCESS, FETCH_ME_FAILURE
} from '../constants/user';

const initialState = {
  usersList: {
    users: [],
    error: null,
    loading: false,
  },
  loggedInUser: {
    authenticated: false,
    user: null,
    error: null,
    loading: false,
  },
  activeUser: {
    user: null,
    error: null,
    loading: false,
  },
  newUser: {
    user: null,
    error: null,
    loading: false,
  },
  deleteUser: {
    user: null,
    error: null,
    loading: false,
  },
};
export default (state = initialState, action) => {
  return state;
};
