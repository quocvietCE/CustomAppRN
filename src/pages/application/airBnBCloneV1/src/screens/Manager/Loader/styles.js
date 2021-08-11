import {StyleSheet} from 'react-native';
import {Colors} from '../../../themes';

export default StyleSheet.create({
  // overlayScreen: {
  //   position: 'absolute',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   top: 0,
  //   left: 0,
  //   bottom: 0,
  //   right: 0,
  // },
  // opacityScreen: {
  //   backgroundColor: Colors.black,
  //   opacity: 0.6,
  // },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  loaderContainer: {
    width: 90,
    height: 90,
    backgroundColor: Colors.white,
    borderRadius: 15,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
});
