import React, { Component } from 'react';
import { View, Text as RNText } from 'react-native';

import styles from './typography.style';

class Text extends Component {
  render() {
    const { style, children } = this.props;
    return (
      <RNText style={{ ...styles.text, ...style }}>{ children }</RNText>
    );
  }
}

export default Text;