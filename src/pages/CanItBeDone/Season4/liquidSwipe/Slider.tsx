import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Wave, {HEIGHT, WIDTH, MARGIN_WIDTH, Side} from './Wave';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {PanGestureHandler} from 'react-native-gesture-handler';
import {snapPoint, useVector} from 'react-native-redash';

import Button from './Button';

const PREV = WIDTH;
const NEXT = 0;
const LEFT_SNAP_POINTS = [MARGIN_WIDTH, PREV];
const RIGHT_SNAP_POINTS = [NEXT, WIDTH - MARGIN_WIDTH];

interface SliderProps {
  index: number;
  setIndex: (value: number) => void;
  children: JSX.Element;
  prev?: JSX.Element;
  next?: JSX.Element;
}

const Slider = ({
  index,
  children: current,
  prev,
  next,
  setIndex,
}: SliderProps) => {
  const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);
  const left = useVector(0, HEIGHT / 2);
  const right = useVector(0, HEIGHT / 2);
  const activeSide = useSharedValue(Side.NONE);
  const isTransitioningLeft = useSharedValue(false);
  const isTransitioningRight = useSharedValue(false);

  console.log('prev: ', prev);
  console.log('next: ', next);
  console.log('current: ', current);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({x}) => {
      if (x <= MARGIN_WIDTH) {
        activeSide.value = Side.LEFT;
        // zIndex.value = 100;
      } else if (x >= WIDTH - MARGIN_WIDTH) {
        activeSide.value = Side.RIGHT;
      } else {
        activeSide.value = Side.NONE;
      }
    },
    onActive: ({x, y}) => {
      if (activeSide.value === Side.LEFT) {
        left.x.value = x;
        left.y.value = y;
      } else if (activeSide.value === Side.RIGHT) {
        right.x.value = WIDTH - x;
        right.y.value = y;
      }
    },
    // onEnd: ({velocityX, velocityY, x}) => {
    //   if (activeSide.value === Side.LEFT) {
    //     const dest = snapPoint(x, velocityX, LEFT_SNAP_POINTS);
    //     isTransitioningLeft.value = dest === PREV;
    //     left.x.value = withSpring(
    //       dest,
    //       {
    //         velocity: velocityX,
    //         overshootClamping: isTransitioningLeft.value ? true : false,
    //         restSpeedThreshold: isTransitioningLeft.value ? 100 : 0.01,
    //         restDisplacementThreshold: isTransitioningLeft.value ? 100 : 0.01,
    //       },
    //       () => {
    //         if (isTransitioningLeft.value) {
    //           runOnJS(setIndex)(index - 1);
    //         } else {
    //           zIndex.value = 0;
    //           activeSide.value = Side.NONE;
    //         }
    //       },
    //     );
    //     left.y.value = withSpring(HEIGHT / 2, {velocity: velocityY});
    //   } else if (activeSide.value === Side.RIGHT) {
    //     const dest = snapPoint(x, velocityX, RIGHT_SNAP_POINTS);
    //     isTransitioningRight.value = dest === NEXT;
    //     right.x.value = withSpring(
    //       WIDTH - dest,
    //       {
    //         velocity: velocityX,
    //         overshootClamping: isTransitioningRight.value ? true : false,
    //         restSpeedThreshold: isTransitioningRight.value ? 100 : 0.01,
    //         restDisplacementThreshold: isTransitioningRight.value ? 100 : 0.01,
    //       },
    //       () => {
    //         if (isTransitioningRight.value) {
    //           runOnJS(setIndex)(index + 1);
    //         } else {
    //           activeSide.value = Side.NONE;
    //         }
    //       },
    //     );
    //     right.y.value = withSpring(HEIGHT / 2, {velocity: velocityY});
    //   }
    // },
  });

  useEffect(() => {
    left.x.value = withSpring(MARGIN_WIDTH);
    right.x.value = withSpring(MARGIN_WIDTH);
  }, []);

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          // {backgroundColor: 'red', borderWidth: 1},
        ]}>
        {current}
        {prev && (
          <View style={[StyleSheet.absoluteFill]}>
            <Wave side={Side.LEFT} position={left}>
              {prev}
            </Wave>
          </View>
        )}
        {next && (
          <View style={[StyleSheet.absoluteFill]}>
            <Wave side={Side.RIGHT} position={right}>
              {next}
            </Wave>
          </View>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Slider;
