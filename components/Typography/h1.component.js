import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './typography.style';

class H1 extends Component {
  render() {
    const { style, children } = this.props;
    return (
      <Text style={{ ...styles.h1, ...style }}>{ children }</Text>
    );
  }
}

export default H1;