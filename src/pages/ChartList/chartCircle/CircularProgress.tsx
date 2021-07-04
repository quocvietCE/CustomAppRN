import React from 'react';
import {View, Dimensions, Animated} from 'react-native';
import {interpolate, multiply} from 'react-native-reanimated';
import {Svg, Circle} from 'react-native-svg';

const {width} = Dimensions.get('window');
const size = width - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const {Value} = Animated;

export type CircularProgressProps = {
  progress: Value;
};

export default ({progress}: CircularProgressProps) => {
  const a = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI * 2],
  });

  const strokeDashoffset = multiply(a, radius);

  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="rgba(255,255,255, 0.4)"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        {...{strokeWidth}}
      />
      <AnimatedCircle
        stroke="#2162cc"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${circumference} ${circumference}`}
        {...{strokeWidth, strokeDashoffset}}
      />
    </Svg>
  );
};
