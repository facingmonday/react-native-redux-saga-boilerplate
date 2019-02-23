import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  fetchAuth
} from '../actions/auth';
import {
  navigate,
} from '../actions/app';

import { selectAuth } from '../selectors/auth';
import SideBar from '../components/SideBar';

const Component = (props) => <SideBar {...props} />

SideBar.propTypes = {
  fetchAuth: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  auth: selectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAuth: () => dispatch(fetchAuth()),
    navigate: (page) => dispatch(navigate(page)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Component);
