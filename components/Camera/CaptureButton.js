import React, { Component } from 'react';
import { View, Text } from 'react-native';

class CaptureButton extends Component {
  render() {
    return (
      <View>
        <Text onPress={this.props.onPress}>CaptureButton</Text>
      </View>
    );
  }
}

export default CaptureButton;