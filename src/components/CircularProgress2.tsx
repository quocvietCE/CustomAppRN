import React, {useRef, useEffect} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

const EMPTY_COLOR = '#a0a0a1';
const PROGRESS_COLOR = '#0085FF';
const SIZE = 200;

export default function CircularProgress({progress = 80}: {progress: number}) {
  const animatedProgress = useRef(new Animated.Value(0)).current;

  const animateProgress = useRef((toValue) => {
    Animated.spring(animatedProgress, {
      toValue,
      useNativeDriver: true,
    }).start();
  }).current;

  useEffect(() => {
    animateProgress(progress);
  }, [animateProgress, progress]);

  const firstIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 50],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorRotate = animatedProgress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
    extrapolate: 'clamp',
  });

  const secondIndicatorVisibility = animatedProgress.interpolate({
    inputRange: [0, 49, 50, 100],
    outputRange: [0, 0, 1, 1],
    extrapolate: 'clamp',
  });

  return (
    <View style={[styles.circleBase, styles.emptyColor, {marginTop: 20}]}>
      <Animated.View
        style={[
          styles.circleBase,
          styles.indicator,
          {
            transform: [
              {
                rotate: firstIndicatorRotate,
              },
            ],
          },
        ]}
      />
      <View style={[styles.circleBase, styles.coverIndicator]} />
      <Animated.View
        style={[
          styles.circleBase,
          styles.indicator,
          {
            transform: [
              {
                rotate: secondIndicatorRotate,
              },
            ],
          },
          {
            opacity: secondIndicatorVisibility,
          },
          // {
          //   borderLeftColor: 'red',
          //   borderTopColor: 'red',
          // },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  circleBase: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 15,
  },
  emptyColor: {
    borderColor: EMPTY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [
      {
        rotate: '-45deg',
      },
    ],
  },
  indicator: {
    position: 'absolute',
    borderLeftColor: PROGRESS_COLOR,
    borderTopColor: PROGRESS_COLOR,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    // transform: [
    //   {
    //     rotate: '60deg',
    //   },
    // ],
  },
  coverIndicator: {
    // borderLeftColor: 'red',
    // borderTopColor: 'blue',
    borderLeftColor: EMPTY_COLOR,
    borderTopColor: EMPTY_COLOR,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    position: 'absolute',
  },
});
