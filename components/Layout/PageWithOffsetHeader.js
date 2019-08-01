import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { H1, H2, Text } from '../Typography';
import theme from '../../styles/variables';

class PageWithOffsetHeader extends Component {
  static defaultProps = {
    pageContainerStyles: {}
  }
  render() {
    const { backgroundStyles, source, title, titleIcon, children, icons, pageContainerStyles } = this.props;
    return (
      <View>
        <ImageBackground style={[ styles.defaultBackgroundStyle, backgroundStyles ]} source={source}>
          <View style={styles.headingContainer}>
            <View style={styles.titleContainer}>
              { titleIcon && <Icon style={{ color: theme.BLUE }} type={'FontAwesome5'} name={titleIcon} /> }
              <H2 style={{ ...styles.title, color: theme.BLUE }}>{title}</H2>
            </View>
            { 
              (icons) ? <View style={styles.iconContainer}>{icons}</View> : null
            }
          </View>
        </ImageBackground>
        <View style={{ ...styles.pageContainer, ...pageContainerStyles }}>
          { children }
        </View>
      </View>
      
    );
  }
}
PageWithOffsetHeader.defaultProps = {
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
  headingContainer: {
    height: 40,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  titleContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  title: {
    padding: 0,
    margin: 0,
    marginLeft: 5,
    fontSize: 26,
    position: 'relative',
    top: -5,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10
  },
  pageContainer: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    height: '100%'
  }
})
export default PageWithOffsetHeader;