import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import { Container, Header, Content, Item, Label, Input, Text, Button } from 'native-base';
import SocialButton from './SocialButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    margin: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}></Text>
        </View>
        <View style={[styles.container, styles.socialButtons]}>
          <SocialButton facebook onPress={this.onPressFacebook} />
          <SocialButton twitter onPress={this.onPressTwitter} />
          <SocialButton instagram onPress={this.onPressInstagram} />
          <SocialButton google onPress={this.onPressGoogle} />
        </View>
        <View>
          <Item style={styles.input}>
            <Input
              placeholder='Email'
              value={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
          </Item>
          <Item style={styles.input}>
            <Input
                placeholder='Password'
                value={this.state.password}
                onChangeText={(text) => this.setState({password: text})}
              />
          </Item>
        </View>
        <View style={styles.buttonContainer}>
          <Button light onPress={() => this.props.loginUser(this.state)}>
            <Text>Login</Text>
          </Button>
        </View>
      </View>
    )
  }
}