// import React from 'react';
// import {Dimensions, StyleSheet, View} from 'react-native';
// import interpolateColor from 'color-interpolate';
// import Svg, {
//   Circle,
//   Defs,
//   G,
//   LinearGradient,
//   Path,
//   Stop,
// } from 'react-native-svg';
// import Animated from 'react-native-reanimated';
// // import {StyleGuide} from '../components';

// const {width} = Dimensions.get('window');
// const {PI, cos, sin} = Math;
// const {multiply, sub, Value, interpolate} = Animated;
// const AnimatedPath = Animated.createAnimatedComponent(Path);
// const colors = ['#e01f21', '#f8b600', '#a9ee89', '#6cbe45'];
// const palette = interpolateColor(colors);
// const size = width - 32;
// const strokeWidth = 20;
// const r = (size - strokeWidth) / 2;
// const cx = size / 2;
// const cy = size / 2;
// const A = 2 * PI;
// const sampling = 4;
// const step = A / sampling;
// const x = (α: number) => cx - r * cos(α);
// const y = (α: number) => -r * sin(α) + cy;
// // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
// const arc = (α: number) => `A ${r} ${r} 0 0 1 ${x(α)} ${y(α)}`;
// const arcs = new Array(sampling).fill(0).map((_0, i) => {
//   const α = i * step;
//   return `M ${x(α)} ${y(α)} ${arc(α + step)}`;
// });

// const Arc = PI + PI * 0.4;

// const startAngle = PI + PI * 0.2;
// const endAngle = 2 * PI - PI * 0.2;

// const startX = cx - r * cos(startAngle);
// const startY = -r * sin(startAngle) + cy;
// const endX = cx - r * cos(endAngle);
// const endY = -r * sin(endAngle) + cy;

// const d = `M ${startX} ${startY} A ${r} ${r} 0 1 0 ${endX} ${endY}`;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   // svg: {
//   //   transform: [{rotateZ: '90deg'}],
//   // },
// });

// export default ({progress}) => {
//   // const progress = new Value(0.5);
//   // const transition = new Value(0.5);
//   const circumference = r * Arc;
//   const α = interpolate(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, Arc],
//   });
//   const strokeDashoffset = multiply(α, -r);
//   return (
//     <View style={styles.container}>
//       <Svg style={styles.svg} width={size} height={size}>
//         <Defs>
//           <LinearGradient id="linear-gradient1" x1={0.5} x2={0.5} y2={1}>
//             <Stop offset={0} stopColor="#6cbe45" />
//             <Stop offset={0.328} stopColor="#a9ee89" />
//             <Stop offset={0.649} stopColor="#f8b600" />
//             <Stop offset={1} stopColor="#e01f21" />
//           </LinearGradient>
//         </Defs>
//         <Path
//           fill="transparent"
//           stroke="gray"
//           {...{strokeWidth, d}}
//           strokeDasharray={`${circumference}, ${circumference}`}
//         />
//         <AnimatedPath
//           fill="transparent"
//           stroke="url(#linear-gradient1)"
//           {...{strokeWidth, strokeDashoffset, d}}
//           strokeDasharray={`${circumference}, ${circumference}`}
//         />
//       </Svg>
//     </View>
//   );
// };
import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Svg, {Defs, LinearGradient, Stop, Path} from 'react-native-svg';
import Animated from 'react-native-reanimated';

const {interpolate, multiply} = Animated;
const {width} = Dimensions.get('window');
const size = width - 32;
const strokeWidth = 50;
// const AnimatedPath = Animated.createAnimatedComponent(Path);
const {PI, cos, sin} = Math;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI + PI * 0.4;
const startAngle = PI + PI * 0.2;
const endAngle = 2 * PI - PI * 0.2;
// A rx ry x-axis-rotation large-arc-flag sweep-flag x y
const x1 = cx - r * cos(startAngle);
const y1 = -r * sin(startAngle) + cy;
const x2 = cx - r * cos(endAngle);
const y2 = -r * sin(endAngle) + cy;
const d = `M ${x1} ${y1} A ${r} ${r} 0 1 0 ${x2} ${y2}`;

// interface CircularPogressProps {
//   progress: Animated.Value<number>;
// }

export default ({progress}) => {
  const circumference = r * A;
  const α = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, A],
  });
  const strokeDashoffset = multiply(α, r);
  return (
    <Svg width={size} height={size}>
      <Defs>
        <LinearGradient
          id="grad"
          x1="0"
          y1="0"
          x2="100%"
          y2="0"
          // x1={0.5}
          // x2={0.5}
          // y2={1}
        >
          <Stop offset={0} stopColor="#6cbe45" />
          <Stop offset={0.328} stopColor="#a9ee89" />
          <Stop offset={0.649} stopColor="#f8b600" />
          <Stop offset={1} stopColor="#e01f21" />
        </LinearGradient>
      </Defs>
      <Path
        stroke="white"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{d, strokeWidth}}
      />
      <Path
        stroke="url(#grad)"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{d, strokeWidth}}
      />
      {/* <AnimatedPath
        stroke="url(#grad)"
        fill="none"
        strokeDasharray={`${circumference}, ${circumference}`}
        {...{d, strokeDashoffset, strokeWidth}}
      /> */}
    </Svg>
  );
};
