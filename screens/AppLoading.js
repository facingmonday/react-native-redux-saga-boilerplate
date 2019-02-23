import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  selectAuthObject,
} from '../selectors/auth';
import {
  fetchMe,
} from '../actions/auth';

import { Container, Content, Item, Input, Text } from 'native-base';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

const mapDispatchToProps = dispatch => ({
  fetchMe: data => dispatch(fetchMe(data))
});

let styles = {
  imageWrapper: {
    flex: 1,
    alignItems: 'stretch'
  },
  image: {
    flex: 1
  }
}
class AppLoading extends React.Component {
  componentWillMount() {
    this.props.fetchMe();
  }
  render() {
    return (
      <Container>
        <Content>
          <Text>Loading</Text>
        </Content>
      </Container>
    );
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(AppLoading);