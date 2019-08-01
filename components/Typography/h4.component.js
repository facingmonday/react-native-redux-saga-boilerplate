import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './typography.style';

class H4 extends Component {
  render() {
    const { style, children } = this.props;
    return (
      <Text style={{ ...styles.h4, ...style }}>{ children }</Text>
    );
  }
}

export default H4;