import { createSelector } from 'reselect';

export const selectApp = () => (state, props) => {
  return state.app;
};