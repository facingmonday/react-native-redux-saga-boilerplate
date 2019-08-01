import React, { Component } from 'react';
import { View, Thumbnail, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { H1, Text } from '../Typography';
import { Icon, Button } from 'native-base';
import styles from './Menu.styles';


class Menu extends Component {
  ///Auth, eCommerce, Forms, Buttons, Images, Video, Social, Gestures, Themes
  render() {
    const options = [
      {
        navigate: 'authList',
        iconType: "FontAwesome5",
        icon: 'lock',
        text: 'Auth'
      },
      {
        navigate: 'commerceList',
        iconType: "FontAwesome5",
        icon: 'shopping-cart',
        text: 'eCommerce'
      },
      // {
      //   navigate: 'forms',
      //   iconType: "FontAwesome5",
      //   icon: 'search',
      //   text: 'Forms'
      // },
      {
        navigate: 'buttons',
        iconType: "FontAwesome5",
        icon: 'fingerprint',
        text: 'Buttons'
      },
      {
        navigate: 'images',
        iconType: "FontAwesome5",
        icon: 'file-image',
        text: 'Images'
      },
      // {
      //   navigate: 'videos',
      //   iconType: "FontAwesome5",
      //   icon: 'play',
      //   text: 'Video'
      // },
      {
        navigate: 'socialList',
        iconType: "FontAwesome5",
        icon: 'comments',
        text: 'Social'
      },
      {
        navigate: 'gestures',
        iconType: "FontAwesome5",
        icon: 'hand-point-up',
        text: 'Gestures'
      },
      // {
      //   navigate: 'themesHome',
      //   iconType: "FontAwesome5",
      //   icon: 'copy',
      //   text: 'Themes'
      // },
    ];
    
    const { onNavigate } = this.props;
    
    return (
      <ImageBackground source={require('../../assets/background2.png')} style={styles.container}>
        <View>
          <H1 style={styles.heading}>Discover</H1>
          <H1 style={styles.heading}>Something</H1>
          <H1 style={styles.heading}>New</H1>
        </View>
        <View style={styles.iconsContainer}>
          { options.map((option, i) => (
            <View key={i} style={styles.iconContainer}>
              <TouchableOpacity style={styles.iconButton} onPress={() => onNavigate(option.navigate)}>
                <Icon
                  style={styles.icon}
                  type={option.iconType}
                  name={option.icon}
                />
              </TouchableOpacity>
              <Text style={styles.text}>{option.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.closeContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={() => this.props.close()}>
            <Icon
              style={styles.close}
              type={'FontAwesome5'}
              name={'times'}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Menu;