import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './StrokePicker.style';

const Line = () => (
  <View
    style={{
      width: '100%',
      height: 1,
      borderColor: 'black',
      borderWidth: 2,
      marginBottom: 4,
    }}
  />
)
class StrokePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    }
  }
  
  handlePress = () => {
    const newCount = (this.state.count < 3) ? this.state.count + 1 : 1
    this.setState({
      count: newCount
    });
    this.props.onChange(newCount);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={styles.container}>
          <View style={styles.lineContainer}>
            { [...Array(this.state.count)].map(() => <Line />)}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>STROKE</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default StrokePicker;