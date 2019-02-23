import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  NAVIGATE,
} from '../constants/app';
import {
  closeDrawer,
} from '../actions/app';
import { Actions } from 'react-native-router-flux';


function* performNavigateAction(action) {
  try {
    Actions.push(action.page);
    yield put(closeDrawer());
  } catch (e) {
    //Actions.login();
  }
}

export function* navigateSaga() {
  yield takeLatest(NAVIGATE, performNavigateAction);
}

export default function* defaultSaga() {
  return yield all([
    navigateSaga(),
  ]);
}
