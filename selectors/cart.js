import { createSelector, createStructuredSelector } from 'reselect';

/**
 * Direct selector to the carts state domain
 */
export const selectCart = () => (state) => state.carts;
