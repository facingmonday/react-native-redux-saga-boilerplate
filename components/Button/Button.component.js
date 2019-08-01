import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback } from 'react-native';
import styles from './Button.styles';

class Button extends Component {
  render() {
    const { outline, rounded, disabled, backgroundColor, borderColor, stroke, label } = this.props;
    console.log('stroke', stroke);
    return (
      <TouchableWithoutFeedback>
        <Text
          style={{
            ...styles.default,
            ...((outline) ? styles.outline : {}),
            ...((disabled) ? styles.disabled : {}),
            ...((borderColor) ? { borderColor }: {}),
            ...((backgroundColor) ? { backgroundColor }: {}),
            ...((rounded) ? { borderRadius: 12 } : {}),
            ...((stroke) ? { borderWidth: stroke }: {}),
          }}
        >{label}</Text>
      </TouchableWithoutFeedback>
    );
  }
}

export default Button;