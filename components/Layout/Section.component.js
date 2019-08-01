import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Section extends Component {
  render() {
    return (
      <View style={{ margin: 20, ...this.props.style }}>
        { this.props.children }
      </View>
    );
  }
}

Section.defaultProps = {
  style: {}
}
export default Section;