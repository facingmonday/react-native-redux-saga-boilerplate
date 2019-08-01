import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { H2, Text } from '../Typography';
import { Icon } from 'native-base';
import styles from './IconBlock.style';

class IconBlock extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.icon}>
          {
            (this.props.image)
            ? <Image source={this.props.image} style={styles.image} />
            : <Icon type={this.props.type} name={this.props.name} />
          }
        </View>
        <View style={styles.title}>
          <H2>{this.props.title}</H2>
        </View>
        <View style={styles.body}>
          <Text>{this.props.body}</Text>
        </View>
      </View>
    );
  }
}
export default IconBlock;