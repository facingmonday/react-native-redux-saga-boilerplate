import { createSelector } from 'reselect';

export const selectAuth = () => (state, props) => {
  return state.auth;
};
export const selectUser = () => createSelector(
  selectAuth,
  auth => auth.user,
);
export const selectAuthenticated = () => createSelector(
  selectAuth,
  auth => auth.authenticated,
);
export const selectError = () => createSelector(
  selectAuth,
  auth => auth.error,
);
export const selectLoading = () => createSelector(
  selectAuth,
  auth => auth.loading,
);
export const selectAuthObject = () => createSelector(
  selectUser(),
  selectAuthenticated(),
  selectLoading(),
  selectError(),
  (user, authenticated, loading, error) => ({
    user,
    authenticated,
    loading,
    error,
  }),
);
