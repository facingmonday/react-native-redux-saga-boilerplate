import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
  },
  heading: {
    color: 'white',
    marginLeft: 20,
  },
  iconsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  iconContainer: {
    width: '33%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    marginBottom: 20,
  },
  iconButton: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 40,
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgba(244, 51, 64, 1.0)',
    alignSelf: 'center',
    // shadowColor: '#001843',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 0,
    // elevation: 5,
  },
  text: {
    color: 'white',
  },
  closeContainer: {
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: 'rgba(244, 51, 64, 1.0)',
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'rgba(244, 51, 64, 1.0)',
    borderRadius: 30,
    justifyContent: 'center',
    marginBottom: 10,
  },

  close: {
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    alignSelf: 'center',
    // shadowColor: '#001843',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 1,
    // shadowRadius: 0,

    // elevation: 5,
  },
})