import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  SHOW_PRODUCT,
} from '../constants/products';
import {
  fetchProductsSuccess,
  fetchProductsFailure,
  fetchProductSuccess,
  fetchProductFailure,
} from '../actions/products';
import {
  fetchProducts as fetchProductsApi,
  fetchProduct as fetchProductApi,
} from '../apis/products';


export function* fetchProductsSaga() {
  yield takeLatest(FETCH_PRODUCTS, performFetchProductsAction);
}

function* performFetchProductsAction(action) {
  try {
    const response = yield call(fetchProductsApi, action.options);
    if (response) {
      console.log('response', response);
      yield put(fetchProductsSuccess(response));
    }
  } catch (e) {
    yield put(fetchProductsFailure(e));
  }
}
export function* fetchProductSaga() {
  yield takeLatest(FETCH_PRODUCT, performFetchProductAction);
}
function* performFetchProductAction(action) {
  try {
    const response = yield call(fetchProductApi, action.productId);
    if (response) {
      yield put(fetchProductSuccess(response));
    }
  } catch (e) {
    yield put(fetchProductFailure(e));
  }
}

export function* showProductSaga() {
  yield takeLatest(SHOW_PRODUCT, performShowProduct);
}

function* performShowProduct(action) {
  console.log('showProduct');
  Actions.productDetails();
}

export default function * defaultSaga() {
  return yield all([
    fetchProductsSaga(),
    fetchProductSaga(),
    showProductSaga()
  ]);
}
