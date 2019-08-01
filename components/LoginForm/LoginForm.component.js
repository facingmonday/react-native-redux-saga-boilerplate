import React, { Component } from 'react';
import { View, ImageBackground, Switch, Image } from 'react-native';
import { Form, Item, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { H1, Text } from '../Typography';
import styles from './LoginForm.style';

class LoginForm extends Component {
  render() {
    return (
      <ImageBackground style={styles.backgroundImage} source={require('../../assets/background1.png')}>
        <View style={{ width: '80%', marginBottom: 60}}>
          <Form>
            <View style={{ alignSelf: 'center'}}>
              <Image style={{ alignSelf: 'center', width: 149, height: 300 }} source={require('../../assets/TheRefinery.png')} />
            </View>
            <View>
              <H1 style={{ color: '#003a5d', fontSize: 26, marginBottom: 20 }}>{this.props.heading || 'Login'}</H1>
            </View>
            <Item style={{ ...styles.item, backgroundColor: 'white' }} rounded>
              <Input style={{ ...styles.input }} placeholder='Username' placeholderTextColor={'#999'}/>
            </Item>
            <Item style={{ ...styles.item, backgroundColor: 'white' }} rounded>
              <Input style={styles.input} placeholder='Password' placeholderTextColor={'#999'}/>
            </Item>
            <View style={{ ...styles.item, flexDirection: 'row', justifyContent: 'center', alignSelf: 'flex-end' }}>
              <Text style={{ marginTop: 5, marginRight: 10, fontWeight: 'bold', color: 'white', fontSize: 18}}>Remember Me</Text>
              <Switch />
            </View>
            <View style={styles.item} rounded>
              <Button full style={styles.loginButton} onPress={() => Actions.home()}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>LOG IN</Text>
              </Button>
            </View>
            <View style={styles.item}>
              <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: '#003a5d'}}>Forgot your password?</Text>
            </View>
            <View style={styles.item}>
              <Text style={{alignSelf: 'center', fontSize: 18, fontWeight: 'bold', color: '#003a5d'}}>Don't have an account? Sign Up!</Text>
            </View>
          </Form>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginForm;