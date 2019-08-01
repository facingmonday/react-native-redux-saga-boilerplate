import React, { cloneElement, Children, Component } from 'react';
import { View, Text } from 'react-native';
import styles from './TabBar.styles';

class TabBar extends Component {
  render() {
    return (
      <View style={[styles.tabBar, this.props.styles]}>
        {
          Children.map(children, (child, i) => (
            cloneElement(child, { key: i })
          ))
        }
      </View>
    );
  }
}

TabBar.defaultProps = {
  styles: {}
};

export default TabBar;