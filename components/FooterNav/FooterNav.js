import React, { Component } from 'react';
import { Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Icon, Button, Text } from 'native-base';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Actions } from 'react-native-router-flux';

import {
  openDrawer,
} from '../../actions/app';


const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
});


class FooterNav extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon type="FontAwesome" name="calendar" />
          </Button>
        </FooterTab>
        <FooterTab>
          <Button vertical>
            <Icon type="FontAwesome" name="user" />
          </Button>
        </FooterTab>
        <FooterTab>
          <Button vertical>
            <Icon type="FontAwesome" name="users" />
          </Button>
        </FooterTab>
        <FooterTab>
          <Button vertical onPress={() => this.props.openDrawer()}>
            <Icon type="FontAwesome" name="bars" />
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(FooterNav);
