import { StyleSheet } from 'react-native';
import theme from '../../styles/variables';
import { Body } from 'native-base';

export default StyleSheet.create({
  container: {
    margin: theme.CONTAINER_PADDING,
    padding: theme.CONTAINER_PADDING,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 54,
    resizeMode: 'cover'
  },
  icon: {
    margin: 10,
  },
  body: {
    marginTop: 20
  }
});
