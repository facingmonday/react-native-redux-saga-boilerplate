import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../styles/variables';

export default StyleSheet.create({
  container: {
    width: 40,
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  lineContainer: {
    flex: 3,
    color: theme.BLUE
  },
  textContainer: {
    flex: 1,
    height: 10,
    width: '100%',
  },
  text: {
    fontSize: 8,
    alignSelf: 'center',
    color: theme.BLUE
  }
})