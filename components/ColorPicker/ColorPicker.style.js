import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../styles/variables';

export default StyleSheet.create({
  container: {
   flexDirection: 'column',
    justifyContent: 'space-between'
  },
  text: {
    flex: 1,
    fontSize: 8,
    alignSelf: 'center'
  }
})