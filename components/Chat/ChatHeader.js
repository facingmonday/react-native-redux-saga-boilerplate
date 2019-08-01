import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Thumbnail } from 'native-base';
import { H2 } from '../Typography';

class ChatHeader extends Component {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.chatHeader}>
        <View style={styles.thumbnail}>
          <Thumbnail source={require('../../assets/social/1/thumbnail.png')} />
        </View>
        <H2 style={styles.text}>{user.name}</H2>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chatHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  thumbnail: {
    flex: 1
  },
  text: {
    flex: 4,
  }
})
export default ChatHeader;