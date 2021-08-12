import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const W = Dimensions.get('window').width;

const BackgroundHeader = ({style}) => {
  return (
    <LinearGradient
      style={[styles.linearGradient, style]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#5D0E7F', '#7A007E', '#9C007F']}>
      <View style={[styles.line, {borderRadius: 60}]} />
      <View style={[styles.line, {top: 130, left: -150}]} />
      <View style={[styles.line, {top: 160, left: 0}]} />
    </LinearGradient>
  );
};

export default BackgroundHeader;

const styles = StyleSheet.create({
  linearGradient: {
    height: (W * 3) / 4,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  line: {
    position: 'absolute',
    width: W,
    height: 80,
    top: 100,
    left: -300,
    backgroundColor: 'rgba(255,255,255, 0.1)',
    transform: [
      {
        rotate: '-35deg',
      },
    ],
    borderRadius: 60,
  },
});
