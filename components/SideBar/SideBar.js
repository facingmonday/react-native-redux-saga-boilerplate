import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { List, ListItem, Left, Body, Right, Button, Icon, Card, CardItem, Thumbnail, H1, H2, H3 } from 'native-base';
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
            <H3>{'Test User'}</H3>
            <Text>{'support@the-refinery.io'}</Text>
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
  const options = [
    {
      navigate: 'dashboardList',
      icon: 'home',
      text: 'Dashboards'
    },
    {
      navigate: 'authList',
      icon: 'lock',
      text: 'Login and Signup'
    },
    {
      navigate: 'ecommerce',
      icon: 'shopping-cart',
      text: 'eCommerce'
    },
    {
      navigate: 'formElementList',
      icon: 'pencil',
      text: 'Form Elements'
    },
    {
      navigate: 'buttonList',
      icon: 'arrow-circle-right',
      text: 'Buttons'
    },
    {
      navigate: 'walkthrough',
      icon: 'image',
      text: 'Walkthrough'
    },
    {
      navigate: 'videoList',
      icon: 'play',
      text: 'Video'
    },
    {
      navigate: 'profileList',
      icon: 'user',
      text: 'Social & Profiles'
    },
    {
      navigate: 'heros',
      icon: 'image',
      text: 'Heros'
    },
  ];
  return (
    <List>
      {
        options.map(option => 
          <ListItem key={option.navigate} icon onPress={() => {
            props.navigate(option.navigate);
          }}>
            <Left>
              <Button transparent>
                <Icon type="FontAwesome" name={option.icon} />
              </Button>
            </Left>
            <Body style={{ }}>
              <Text>{option.text}</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        )
      }
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
    marginTop: 20,
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
