import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { Actions } from 'react-native-router-flux';
import styles from './FooterButton.style';

import {
  openDrawer,
} from '../../actions/app';


const mapDispatchToProps = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
});


class FooterButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => this.props.openDrawer()}>
          <Image style={styles.icon} source={require('../../assets/footerButton.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const withConnect = connect(null, mapDispatchToProps);

export default compose(
  withConnect,
)(FooterButton);
