import { createSelector, createStructuredSelector } from 'reselect';

/**
 * Direct selector to the carts state domain
 */
export const selectCart = () => (state) => {
  console.log('state', state);
  return state.cart;
}
export const selectTotal = () => createSelector(
  selectCart(),
  (cart) => {
    return 0.00;
  }
);