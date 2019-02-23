import { all } from 'redux-saga/effects';

import userSaga from './user';
import authSaga from './auth';
import appSaga from './app';
import productsSaga from './products';

export default function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
    appSaga(),
    productsSaga(),
  ]);
}
