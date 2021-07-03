import React, {useState} from 'react';
import slides from './data';

import Slider from './Slider';
import Slide from './Slide';

export const assets = slides.map(({picture}) => picture);

const LiquidSwipe = () => {
  const [index, setIndex] = useState(2);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  console.log('assets: ', assets);
  console.log('prev: ', prev);
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}>
      <Slide slide={slides[index]!} />
    </Slider>
  );
};

export default LiquidSwipe;

// StyleSheet.absoluteFill
// position: 'absolute';
// left: 0;
// right: 0;
// top: 0;
// bottom: 0;

// absoluteFillObject
// position: 'absolute';
// left: 0;
// right: 0;
// top: 0;
// bottom: 0;

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import Animated, {
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   useSharedValue,
//   withSpring,
// } from 'react-native-reanimated';

// import {
//   PanGestureHandler,
//   PanGestureHandlerGestureEvent,
// } from 'react-native-gesture-handler';

// const SIZE = 100.0;
// const CIRCLE_RADIUS = SIZE * 2;

// type ContextType = {
//   translateX: number;
//   translateY: number;
// };

// export default function App() {
//   const translateX = useSharedValue(0);
//   const translateY = useSharedValue(0);

//   const panGestureEvent = useAnimatedGestureHandler<
//     PanGestureHandlerGestureEvent,
//     ContextType
//   >({
//     onStart: (event, context) => {
//       context.translateX = translateX.value;
//       context.translateY = translateY.value;
//     },
//     onActive: (event, context) => {
//       translateX.value = event.translationX + context.translateX;
//       translateY.value = event.translationY + context.translateY;
//     },
//     onEnd: () => {
//       const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

//       if (distance < CIRCLE_RADIUS + SIZE / 2) {
//         translateX.value = withSpring(0);
//         translateY.value = withSpring(0);
//       }
//     },
//   });

//   const rStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateX: translateX.value,
//         },
//         {
//           translateY: translateY.value,
//         },
//       ],
//     };
//   });

//   return (
//     <View style={styles.container}>
//       <View style={styles.circle}>
//         <PanGestureHandler onGestureEvent={panGestureEvent}>
//           <Animated.View style={[styles.square, rStyle]} />
//         </PanGestureHandler>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   square: {
//     width: SIZE,
//     height: SIZE,
//     backgroundColor: 'rgba(0, 0, 256, 0.5)',
//     borderRadius: 20,
//   },
//   circle: {
//     width: CIRCLE_RADIUS * 2,
//     height: CIRCLE_RADIUS * 2,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: CIRCLE_RADIUS,
//     borderWidth: 5,
//     borderColor: 'rgba(0, 0, 256, 0.5)',
//   },
// });
