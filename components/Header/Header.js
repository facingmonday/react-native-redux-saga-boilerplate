import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  selectAuthObject,
} from '../../selectors/auth';
import {
  loginUser,
  logoutUser,
} from '../../actions/user';
import {
  openDrawer,
} from '../../actions/app';

import { Image, TouchableWithoutFeedback } from 'react-native';
import { Container, Header as NativeHeader, Left, Body, Right, Button, Icon, Title, Drawer, Thumbnail } from 'native-base';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginUser(data)),
  logout: () => dispatch(logoutUser()),
  openDrawer: () => dispatch(openDrawer())
});

class Header extends React.Component{
  render() {
    return (
      <NativeHeader transparent style={{height: 80}}>
        <Left transparent>
          { this.props.showBack && 
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon small style={{ color: 'black', fontSize: 16 }} type="FontAwesome" name="arrow-left" />
            </Button>
          }
        </Left>
        <Body>
          <TouchableWithoutFeedback onPress={Actions.home}>
            <Image style={{ width: 140, height: 31, resizeMode: 'stretch' }} source={require('../../assets/headerDark.png')} />
          </TouchableWithoutFeedback>
        </Body>
        <Right>
          <Button transparent vertical onPress={() => Actions.search()}>
            <Icon style={{ fontSize: 24, color: 'grey' }} type="FontAwesome" name="search" />
          </Button>
        </Right>
      </NativeHeader>
    )
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(Header);
