import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { styles } from '../LoginForm';

const styles = StyleSheet.create({
  default: {
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2,
  }
})
class Input extends Component {
  render() {
    
    const {
      rounded,
      backgroundColor,
      borderColor
    } = this.props;

    const inputStyle = [
      styles.default,
      rounded && styles.rounded,
      backgroundColor && { backgroundColor }
    ]
    return (
      <TextInput
        style={inputStyle}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;