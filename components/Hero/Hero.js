import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Hero extends Component {
  render() {
    const { source } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{uri: source}}
          style={styles.image}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
  },
  image: {
    width: null,
    height: 200,
    resizeMode: 'cover',
  }
})  
export default Hero;