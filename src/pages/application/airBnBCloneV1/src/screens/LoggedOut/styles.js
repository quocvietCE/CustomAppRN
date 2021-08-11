import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.green01,
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 50,
    marginBottom: 40,
  },
  welcomeWrapper: {
    flex: 1,
    display: 'flex',
    marginTop: 30,
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: '300',
    marginBottom: 40,
  },
  facebookIcon: {
    color: Colors.green01,
    position: 'relative',
    left: 20,
    zIndex: 8,
  },
  moreOptionsButton: {
    marginTop: 15,
  },
  moreOptionsButtonText: {
    color: Colors.white,
    fontSize: 16,
  },
  termsText: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
  termsAndConditions: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 30,
  },
  linkButton: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.white,
  },
});

export default styles;
