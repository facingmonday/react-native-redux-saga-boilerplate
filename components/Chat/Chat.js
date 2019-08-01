import React, { Component } from 'react';
import { View, Text, Keyboard, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Bubble from './Bubble';
import ChatHeader from './ChatHeader';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          type: 'receiver',
          text: 'Welcome to The Refinery! We hope you\'ll have a wonderful day.'
        }
      ],
    }
  }

  handleUserSelect = ({user}) => {
    this.setState({
      recipient: user
    });
  }
  
  handleSubmitEditing = ({nativeEvent: { text }}) => {
    this.setState({
      messages: this.state.messages.concat({ type: 'sender', text })
    });
    this.refs.textInput.clear();
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', marginBottom: 20}}>
        <View style={{ width: '100%' }}>
          <ChatHeader user={this.props.user} />  
        </View>
        <View style={{ flex: 1 }}>
          <KeyboardAwareScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
            <View>
              { this.state.messages.map((m, i) => <Bubble type={m.type} text={m.text} />) }
              <TextInput placeholder={'Say Something...'} ref="textInput" style={{ padding: 5, marginBottom: 1, borderRadius: 10, height: 40, borderColor: 'gray', borderWidth: 1}} onSubmitEditing={this.handleSubmitEditing} />
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
      
    );
  }
}

export default Chat;