import {StyleSheet, Dimensions} from 'react-native';
export const {width, height} = Dimensions.get('screen');

export const IMAGE_WIDTH = width * 0.65;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;

export const SPACING = 20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A5F1FA',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 12,
    opacity: 0.4,
  },
  price: {
    fontSize: 42,
    letterSpacing: 3,
    fontWeight: '900',
    marginRight: 8,
  },
  currency: {
    fontSize: 16,
    lineHeight: 36,
    fontWeight: '800',
    alignSelf: 'flex-end',
  },
  imageCard: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
  },
  whiteRectangle: {
    width: IMAGE_WIDTH + SPACING * 2,
    position: 'absolute',
    backgroundColor: 'white',
    backfaceVisibility: 'visible',
    zIndex: -1,
    top: SPACING * 2,
    left: SPACING,
    bottom: 0,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
});

export default styles;
