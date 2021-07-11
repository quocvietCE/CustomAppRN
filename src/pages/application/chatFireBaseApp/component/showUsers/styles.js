import {StyleSheet} from 'react-native';
import {color} from '../../utility';

export default StyleSheet.create({
  cardStyle: {
    backgroundColor: color.SEMI_TRANSPARENT,
    borderWidth: 1,
    borderColor: color.SILVER,
    padding: 6,
  },
  cardItemStyle: {
    backgroundColor: color.SEMI_TRANSPARENT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    height: 60,
    width: 60,
    borderColor: color.WHITE,
    borderWidth: 2,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.DARK_GRAY,
    marginLeft: 10,
  },
  thumbnailName: {fontSize: 30, color: color.WHITE, fontWeight: 'bold'},
  profileName: {
    fontSize: 20,
    color: color.WHITE,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
