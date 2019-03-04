import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem, Left, Body, Right, Button, Icon, Card, CardItem, Thumbnail, H1, H2 } from 'native-base';
import PropTypes from 'prop-types';

const SideBarHeader = (props) => {
  const { name, email } = props.user;
  return (
    <Card transparent>
      <CardItem>
        <Body style={styles.headerContainer}>
          <View style={styles.sideBarHeaderThumbnail}>
            <Thumbnail source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
          </View>
          <View style={styles.sideBarHeaderRight}>
            <H1>{name}</H1>
            <H2>{email}</H2>
          </View>
        </Body>
      </CardItem>
    </Card>
  )
}
SideBarHeader.defaultProps = {

};
SideBarHeader.propTypes = {
  classes: PropTypes.object,
};

const SideBarMenu = (props) => {
  return (
    <List>
      <ListItem icon onPress={() => {
        props.navigate('dashboard');
      }}>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="home" />
          </Button>
        </Left>
        <Body style={{ }}>
          <Text>Dashboard</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon onPress={() => {
        props.navigate('products');
      }}>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="shopping-cart" />
          </Button>
        </Left>
        <Body style={{ }}>
          <Text>Products</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon onPress={() => {
        props.navigate('settings');
      }}>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="gears" />
          </Button>
        </Left>
        <Body style={{ }}>
          <Text>Settings</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon onPress={() => {
        props.navigate('cart');
      }}>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="shopping-cart" />
          </Button>
        </Left>
        <Body style={{ }}>
          <Text>Cart</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon onPress={() => {
        props.navigate('cart');
      }}>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="shopping-bag" />
          </Button>
        </Left>
        <Body style={{ }}>
          <Text>Checkout</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
      <ListItem icon onPress={() => {
        props.logout();
      }}>
        <Left>
          <Button transparent>
            <Icon type="FontAwesome" name="sign-out" />
          </Button>
        </Left>
        <Body style={{ }}>
          <Text>Logout</Text>
        </Body>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>
    </List>
  );
}
SideBarMenu.defaultProps = {

};
SideBarMenu.propTypes = {
  classes: PropTypes.object,
};

class SideBar extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <SideBarHeader user={this.props.auth.user}/>
        <SideBarMenu {...this.props}/>
      </View>
    );
  }
}

SideBar.defaultProps = {

};
SideBar.propTypes = {
  classes: PropTypes.object,
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sideBarHeaderThumbnail: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  sideBarHeaderRight: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: 10,
  }
});

export default SideBar;
