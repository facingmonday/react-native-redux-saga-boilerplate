import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../constants/products';

const initialState = {
  productList: {
    error: null,
    loading: false,
    products: []
  }
};

export default (state = initialState, action) => {
  let error;
  console.log('action in reducer', action);
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { dashboard: action.payload, error: null, loading: false };
    case FETCH_PRODUCT_FAILURE:
      error = action.payload || { message: action.payload.message };
      return { dashboard: null, error, loading: false };
    case FETCH_PRODUCTS:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      console.log('FETCH_PRODUCTS_SUCCESS', action)
      return { ...state, productList: { products: action.results, error: null, loading: false }};
    case FETCH_PRODUCTS_FAILURE:
      error = action.payload || { message: action.payload.message };
      return { dashboard: null, error, loading: false };
    default:
      return state;
  }
}
