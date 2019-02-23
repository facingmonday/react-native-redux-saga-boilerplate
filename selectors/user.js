import { createSelector, createStructuredSelector } from 'reselect';

/**
 * Direct selector to the users state domain
 */
export const selectUsersDomain = (state) => state.get('users');

/**
 * Sub Domain Selectors
 */
export const selectUserListDomain = createSelector(
  selectUsersDomain,
  (users) => users.get('userList')
);
export const selectNewUserDomain = createSelector(
  selectUsersDomain,
  (users) => users.get('newUser')
);
export const selectDeletedUserDomain = createSelector(
  selectUsersDomain,
  (users) => users.get('deletedUser')
);
export const selectActiveUserDomain = createSelector(
  selectUsersDomain,
  (users) => users.get('activeUser')
);

/**
 * Specific Sub Domain Selectors
 */
export const selectUserListLoading = createSelector(
  selectUserListDomain,
  (userList) => userList.get('loading')
);

export const selectUserListError = createSelector(
  selectUserListDomain,
  (userList) => userList.get('error')
);

export const selectUserListUsers = createSelector(
  selectUserListDomain,
  (userList) => userList.get('users')
);

export const selectUserListObject = () => createStructuredSelector({
  loading: selectUserListLoading,
  error: selectUserListError,
  users: selectUserListUsers,
});


export const selectNewUserLoading = createSelector(
  selectNewUserDomain,
  (newUser) => newUser.get('loading')
);

export const selectNewUserError = createSelector(
  selectNewUserDomain,
  (newUser) => newUser.get('error')
);

export const selectNewUserUser = createSelector(
  selectNewUserDomain,
  (newUser) => newUser.get('user')
);

export const selectNewUser = () => createStructuredSelector({
  loading: selectNewUserLoading,
  error: selectNewUserError,
  user: selectNewUserUser,
});

export const selectActiveUserLoading = createSelector(
  selectActiveUserDomain,
  (activeUser) => activeUser.get('loading')
);

export const selectActiveUserError = createSelector(
  selectActiveUserDomain,
  (activeUser) => activeUser.get('error')
);

export const selectActiveUserUser = createSelector(
  selectActiveUserDomain,
  (activeUser) => activeUser.get('user')
);

export const selectActiveUser = () => createStructuredSelector({
  loading: selectActiveUserLoading,
  error: selectActiveUserError,
  user: selectActiveUserUser,
});

export const selectDeletedUserLoading = createSelector(
  selectDeletedUserDomain,
  (deletedUser) => deletedUser.get('loading')
);

export const selectDeletedUserError = createSelector(
  selectDeletedUserDomain,
  (deletedUser) => deletedUser.get('error')
);

export const selectDeletedUserUser = createSelector(
  selectDeletedUserDomain,
  (deletedUser) => deletedUser.get('user')
);

export const selectDeletedUser = () => createStructuredSelector({
  loading: selectDeletedUserLoading,
  error: selectDeletedUserError,
  user: selectDeletedUserUser,
});

// export default () => createSelector(
//   selectUsersDomain,
//   (substate) => substate.toJS()
// );
