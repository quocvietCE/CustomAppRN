import {StyleSheet, Dimensions, findNodeHandle} from 'react-native';
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
});

export default styles;
