import { createSelector, createStructuredSelector } from 'reselect';

/**
 * Direct selector to the products state domain
 */
export const selectProductsDomain = (state) => state.products;

/**
 * Sub Domain Selectors
 */
export const selectProductList = () => createSelector(
  selectProductsDomain,
  (products) => products.productList,
);
export const selectNewProduct = createSelector(
  selectProductsDomain,
  (products) => products.newProduct,
);
export const selectDeletedProduct = createSelector(
  selectProductsDomain,
  (products) => products.deletedProduct,
);
export const selectActiveProduct = () => createSelector(
  selectProductsDomain,
  (products) => products.activeProduct,
);
