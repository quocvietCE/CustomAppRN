import {StyleSheet, Dimensions} from 'react-native';
export const {width, height} = Dimensions.get('screen');

export const IMAGE_WIDTH = width * 0.65;
export const IMAGE_HEIGHT = IMAGE_WIDTH * 0.7;

export const SPACING = 20;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
});

export default styles;
