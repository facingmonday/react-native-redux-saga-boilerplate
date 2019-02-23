import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Actions } from 'react-native-router-flux';
import {
  selectAuthObject,
} from '../selectors/auth';
import {
  loginUser,
  logoutUser,
} from '../actions/user';
import {
  openDrawer
} from '../actions/app';

import { Container, Header, Left, Body, Right, Button, Icon, Title, Drawer } from 'native-base';

const mapStateToProps = createStructuredSelector({
  auth: selectAuthObject(),
});

const mapDispatchToProps = dispatch => ({
  login: data => dispatch(loginUser(data)),
  logout: () => dispatch(logoutUser()),
  openDrawer: () => dispatch(openDrawer()),
});

class HeaderComponent extends React.Component{
  render() {
    return (
      <Header transparent>
        <Left transparent>
          <Button transparent onPress={(this.props.openDrawer)}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={() => Actions.cart()}>
            <Icon type="FontAwesome" name="shopping-cart" />
          </Button>
        </Right>
      </Header>
    );
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(HeaderComponent);
