import React, { Component } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import {  Button, Text } from 'native-base';
class Walkthrough extends Component {
  render() {
    return (
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'}} style={styles.backgroundImage}>
        <View style={{ flex: 2 }} />
        <View style={{ flex: 1, alignItems: 'center', alignContent: 'center' }}>
          <Text style={styles.text}>TO SIGN UP</Text>
          <Button style={{padding: '10%', alignSelf: 'center'}}>
            <Text>Click Here</Text>
          </Button>
          <Text style={{ color: 'white', marginTop: 20}} onPress={() => this.props.navigation.goBack()}>Cancel</Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
  },

  text: {
      textAlign: 'center',
      color: 'white',
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 32
  }
});
export default Walkthrough;