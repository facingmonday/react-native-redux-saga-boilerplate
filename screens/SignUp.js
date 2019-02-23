import React from 'react';
import {
  View,
  Image,
  Dimensions,
  Keyboard,
} from 'react-native';
import Header from '../components/Header';
import { Container, Content, Item, Input } from 'native-base';
import SignUpForm from '../components/SignUpForm';

export default class SignUp extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <SignUpForm />
        </Content>
      </Container>
    )
  }
}