import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_ME,
  LOGIN_USER,
} from '../constants/auth';
import {
  fetchMeSuccess,
  fetchMeFailure,
  loginUserSuccess,
  loginUserFailure,
} from '../actions/auth';
import {
  fetchMe as fetchMeApi,
  loginUser as loginUserApi,
} from '../apis/auth';
import { Actions } from 'react-native-router-flux';
import { getCookie, setCookie, deleteCookie } from '../utils/cookie';

function* performFetchMeAction(action) {
  try {
    const response = yield call(fetchMeApi);
    if (response) {
      yield put(fetchMeSuccess(response));
      Actions.dashboard();
    }
  } catch (e) {
    yield put(fetchMeFailure(e));
    Actions.login();
  }
}
function* performLoginUserAction(action) {
  try {
    const response = yield call(loginUserApi, action.credentials);
    if (response) {
      console.log('response', response)
      yield put(loginUserSuccess(response));
      Actions.dashboard();
    }
  } catch (e) {
    yield put(loginUserFailure(e));
  }
}
export function* fetchMeSaga() {
  yield takeLatest(FETCH_ME, performFetchMeAction);
}
export function* loginUserSaga() {
  yield takeLatest(LOGIN_USER, performLoginUserAction);
}
export default function* defaultSaga() {
  return yield all([
    fetchMeSaga(),
    loginUserSaga(),
  ]);
}
