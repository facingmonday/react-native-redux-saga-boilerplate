import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../constants/products';

const initialState = {
  activeProduct: {
    error: null,
    loading: false,
    product: {}
  },
  productList: {
    error: null,
    loading: false,
    products: []
  }
};

export default (state = initialState, action) => {
  let error;
  switch (action.type) {
    case FETCH_PRODUCT:
      return { ...state, loading: true };
    case FETCH_PRODUCT_SUCCESS:
      return { ...state, activeProduct: { product: action.result, error: null, loading: false }};
    case FETCH_PRODUCT_FAILURE:
      return { ...state, activeProduct: { product: [], error: action.error, loading: false }};
    case FETCH_PRODUCTS:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, productList: { products: action.results, error: null, loading: false }};
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, productList: { products: action.results, error: null, loading: false }};
    default:
      return state;
  }
}
