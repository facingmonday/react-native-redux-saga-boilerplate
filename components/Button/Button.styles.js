import React from 'react';
import { StyleSheet } from 'react-native';
import theme from '../../styles/variables';

export default StyleSheet.create({
  default: {
    backgroundColor: theme.BUTTON_COLOR,
    borderWidth: 1,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    borderWidth: 1,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  },
  disabled: {
    backgroundColor: '#999999',
    borderColor: '#333',
    borderWidth: 1,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
  }
})