import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import {
  FETCH_ME,
  LOGIN_USER,
  LOGOUT,
} from '../constants/auth';
import {
  fetchMeSuccess,
  fetchMeFailure,
  loginUserSuccess,
  loginUserFailure,
  logout,
} from '../actions/auth';
import {
  fetchMe as fetchMeApi,
  loginUser as loginUserApi,
} from '../apis/auth';
import { Actions } from 'react-native-router-flux';
import config from '../config';
import { closeDrawer } from '../actions/app';

function* performFetchMeAction(action) {
  try {
    const token = yield AsyncStorage.getItem(config.AUTH_TOKEN_KEY);
    const response = yield call(fetchMeApi, token);
    if (response) {
      yield put(fetchMeSuccess(response));
      Actions.dashboard();
    }
  } catch (e) {
    console.log('e', e);
    yield put(fetchMeFailure(e));
    Actions.login();
  }
}
function* performLoginUserAction(action) {
  try {
    const response = yield call(loginUserApi, action.credentials);
    if (response) {
      yield AsyncStorage.setItem(config.AUTH_TOKEN_KEY, response.token);
      yield put(loginUserSuccess(response));
      Actions.dashboard();
    }
  } catch (e) {
    yield put(loginUserFailure(e));
  }
}
function* performLogOutAction(){
  try {
    yield AsyncStorage.removeItem(config.AUTH_TOKEN_KEY);

    Actions.login();
    yield put(closeDrawer())
  } catch (e) {
    Actions.login();
  }
}
export function* fetchMeSaga() {
  yield takeLatest(FETCH_ME, performFetchMeAction);
}
export function* loginUserSaga() {
  yield takeLatest(LOGIN_USER, performLoginUserAction);
}
export function* logoutSaga() {
  yield takeLatest(LOGOUT, performLogOutAction);
}
export default function* defaultSaga() {
  return yield all([
    fetchMeSaga(),
    loginUserSaga(),
    logoutSaga(),
  ]);
}
