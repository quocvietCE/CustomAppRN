import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: 28,
    color: Colors.white,
    fontWeight: '300',
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  forgotPasswordSubheading: {
    color: Colors.white,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  nextButton: {
    position: 'absolute',
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
  },
});

export default styles;
