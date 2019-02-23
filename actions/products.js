import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SHOW_PRODUCT,
} from '../constants/products';

export function fetchProduct(productId) {
  return {
    type: FETCH_PRODUCT,
    productId,
  };
}
export function fetchProductSuccess(product) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    product,
  };
}
export function fetchProductFailure(error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    error,
  };
}
export function fetchProducts(options) {
  return {
    type: FETCH_PRODUCTS,
    options
  };
}
export function fetchProductsSuccess(response) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    results: response.results,
    stats: response.stats,
  };
}
export function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    error,
  };
}
export function showProduct(productId) {
  console.log('showProdut');
  return {
    type: SHOW_PRODUCT,
    productId,
  };
}
