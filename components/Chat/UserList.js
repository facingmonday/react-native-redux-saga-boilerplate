import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { List, ListItem, Left, Body, Thumbnail, Icon, Input } from 'native-base';
import { Text } from '../Typography';
import { Actions } from 'react-native-router-flux';

class UserList extends Component {
  state = {
    selectedUser: null,
    searchValue: '',
  }
  static defaultProps = {
    users: [
      {
        id: '123234123',
        name: 'Jay',
        description: 'Lead Developer',
        thumbnail: require('../../assets/social/1/thumbnail.png')
      },
      {
        id: '123121231123',
        name: 'David',
        description: 'Lead Designer',
        thumbnail: require('../../assets/social/2/thumbnail.png')
      }
    ]
  }
  handleInputChange = (searchValue) => {
    this.setState({
      searchValue,
      selectedUser: null
    });
  }
  handleUserSelect = (selectedUser) => {
    this.setState({
      selectedUser
    })
    Actions.chat({
      user: selectedUser
    })
  }
  filteredUsers = () => {
    return this.props.users.filter((user) => Boolean(user.name.indexOf(this.state.searchValue) >= 0))
  }
  render() {
    const { users } = this.props;
    return (
      <View style={styles.userLookup}>
        <View style={styles.inputContainer}>
        <Input style={styles.input} onChangeText={this.handleInputChange} value={this.state.selectedUser} placeholder={'Search...'} />
        </View>
        <View style={styles.resultsContainer}>
          <List>
            {
              this.filteredUsers().map((user, i) => (
                <ListItem key={i} thumbnail onPress={() => this.handleUserSelect(user)}>
                  <Left>
                    <Thumbnail source={user.thumbnail} />
                  </Left>
                  <Body>
                    <Text>{user.name}</Text>
                    <Text note>{user.description}</Text>
                  </Body>
                </ListItem>
              ))
            }
          </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userLookup: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  inputContainer: {
    height:60,
  },
  input: {
    height: 50,
    padding: 5,
    borderRadius: 5,
    margin: 5,
    borderColor: 'grey',
    borderWidth: 1,
    fontSize: 24,
  }
})

export default UserList;