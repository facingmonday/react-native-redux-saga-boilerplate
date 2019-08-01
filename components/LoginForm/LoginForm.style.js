import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  item: {
    marginBottom: 20,
    borderRadius: 30,
    padding: 0,
  },
  input: {
    backgroundColor: 'transparent',
    color: '#999',
    paddingLeft: 20,
    fontWeight: 'bold',
  },
  loginButton: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'red',
    alignItems: 'center',
  }
});
