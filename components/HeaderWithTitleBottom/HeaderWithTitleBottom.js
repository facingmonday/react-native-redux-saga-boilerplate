import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { H2, Text } from '../Typography';

class HeaderWithTitleBottom extends Component {
  render() {
    const { backgroundStyles, source, title, defaultBackgroundStyle } = this.props;
    return (
      <ImageBackground style={[ styles.defaultBackgroundStyle, backgroundStyles ]} source={source}>
        <View style={styles.titleContainer}>
          <H2 style={styles.title}>{title}</H2>
          <View>
            <Text>Icon</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
HeaderWithTitleBottom.defaultProps = {
  backgroundStyles: {},
  source: require('../../assets/navigation/auth.png')
}
const styles = StyleSheet.create({
  defaultBackgroundStyle: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 200,
  },
  titleContainer: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 2,
  },
  title: {
    flex: 3
  },
  icons: {
    flex: 1,
  }
})
export default HeaderWithTitleBottom;