import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  fetchAuth,
  logout,
} from '../actions/auth';
import {
  navigate,
} from '../actions/app';

import { selectAuth } from '../selectors/auth';
import Footer from '../components/Footer';

const Component = (props) => <Footer {...props} />

Component.propTypes = {
  fetchAuth: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  auth: selectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchAuth: () => dispatch(fetchAuth()),
    navigate: (page) => dispatch(navigate(page)),
    logout: () => dispatch(logout()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Component);
