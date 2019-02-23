import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  selectAuthObject,
} from '../selectors/auth';
import {
  loginUser,
  logoutUser,
} from '../actions/auth';


import {
  View,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import Header from '../components/Header';
import { Container, Content, Item, Input } from 'native-base';
// import SettingsList from '../components/SettingsList';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  logout: () => dispatch(logoutUser())
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
class Settings extends React.Component {
  render() {
    return (
      <Container>
        <Header title={'Login'}/>
        <Content>
          <Text>Settings</Text>
        </Content>
      </Container>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
)(Settings);