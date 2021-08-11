import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    // paddingTop: 20,
    // backgroundColor: 'red',
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: Colors.gray04,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  scrollview: {
    paddingTop: 120,
  },
});

export default styles;
