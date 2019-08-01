import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './ColorPicker.style';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }
  
  render() {
   return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image style={{ width: null, height: '100%'}} source={require('../../assets/colorPicker.png')} />
          <Text style={styles.text}>COLOR</Text>
        </View> 
      </TouchableWithoutFeedback>
    );
  }
}

export default ColorPicker;