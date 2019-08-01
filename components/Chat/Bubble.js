import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Bubble extends Component {
  static defaultProps = {
    receiver: false
  }
  render() {
    const { type, text } = this.props
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: (type === 'receiver') ? 'grey' : '#ff4242',
          alignSelf: (type === 'receiver') ? 'flex-start' : 'flex-end',
          maxWidth: '80%',
          padding: 10,
          margin: 10
        }}
      >
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
  },
  text: {
    fontSize: 18
  }
})

export default Bubble;