import { StyleSheet } from 'react-native';
import theme from '../../styles/variables';

export default StyleSheet.create({
  h1: {
    fontFamily: 'Playfair Display',
    fontSize: theme.FONT_SIZE_H1,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  h2: {
    fontFamily: 'Playfair Display',
    fontSize: theme.FONT_SIZE_H2,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  h3: {
    fontFamily: 'Playfair Display',
    fontSize: theme.FONT_SIZE_H3,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  h4: {
    fontFamily: 'Playfair Display',
    fontSize: theme.FONT_SIZE_H4,
    fontWeight: theme.FONT_WEIGHT_BOLD,
  },
  text: {
    fontFamily: 'Rubik',
    fontSize: theme.FONT_SIZE_TEXT,
    fontWeight: theme.FONT_WEIGHT_LIGHT,
  }
});
