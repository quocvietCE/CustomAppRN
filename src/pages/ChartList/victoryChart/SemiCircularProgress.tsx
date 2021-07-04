import React, {FunctionComponent} from 'react';
import {Dimensions, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import {SemiCircularProgressType} from './type';

const AnimatedPath = Animated.createAnimatedComponent(Path);

const {PI, cos, sin, round} = Math;
const {width} = Dimensions.get('window');

export const polarToCartesian = (
  cx: number,
  cy: number,
  radius: number,
  angleInDegrees: number,
) => {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
};

export const circlePath = (
  x: number,
  y: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) => {
  var start = polarToCartesian(x, y, radius, endAngle * 0.9999);
  var end = polarToCartesian(x, y, radius, startAngle);
  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  const d = [
    'M',
    start.x,
    start.y,
    'A',
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ];
  return {
    start,
    end,
    d: d.join(' '),
  };
};
const size = width - 32;
const strokeWidth = 15;
const r = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = 50;

const min1 = 0;
const min2 = 40;
const min3 = 90;
const min4 = 130;

const d1 = circlePath(cx, cy, r, 180, 219);
const d2 = circlePath(cx, cy, r, 220, 269);
const d3 = circlePath(cx, cy, r, 270, 319);
const d4 = circlePath(cx, cy, r, 320, 0);

const SemiCircularProgress: FunctionComponent<SemiCircularProgressType> = ({
  width = size,
  height = 200,
  startValue,
  endValue,
  progressValue,
  totalValue,
}) => {
  const ratio = (progressValue - startValue) / (endValue - startValue);
  const part1Ratio = 39 / 180;
  const part2Ratio = 89 / 180;
  const part3Ratio = 139 / 180;

  console.log('Ratio: ', ratio);
  console.log('Ratio 2: ', round(ratio * 180));
  console.log('Part1: ', part1Ratio);

  let progressPath;
  let color;
  if (ratio > part3Ratio) {
    progressPath = circlePath(cx, cy, r, 320, 180 + round(ratio * 180));
    color = '#6cbe45';
  } else if (ratio > part2Ratio) {
    progressPath = circlePath(cx, cy, r, 270, 180 + round(ratio * 180));
    color = 'url(#linear-gradient)';
  } else if (ratio > part1Ratio) {
    progressPath = circlePath(cx, cy, r, 220, 180 + round(ratio * 180));
    color = 'url(#linear-gradient-2)';
  } else {
    progressPath = circlePath(cx, cy, r, 180, 180 + round(ratio * 180));
    color = 'url(#linear-gradient-3)';
  }

  return (
    <View style={{backgroundColor: '#dedede'}}>
      <Svg width={width} height={height}>
        <Defs>
          <LinearGradient
            id="linear-gradient"
            x1={7.95}
            y1={0.264}
            x2={-0.445}
            y2={1.099}
            gradientUnits="objectBoundingBox">
            <Stop offset={0} stopColor="#6dbf47" />
            <Stop offset={0.86} stopColor="#8bd768" />
            <Stop offset={0.945} stopColor="#dfc729" />
            <Stop offset={0.978} stopColor="#dfc729" />
            <Stop offset={1} stopColor="#e1281e" />
          </LinearGradient>
          <LinearGradient
            id="linear-gradient-2"
            x1={7.95}
            y1={0.264}
            x2={-1.334}
            y2={3.075}
            gradientUnits="objectBoundingBox">
            <Stop offset={0} stopColor="#6dbf47" />
            <Stop offset={0.35} stopColor="#8bd768" />
            <Stop offset={0.828} stopColor="#dfc729" />
            <Stop offset={1} stopColor="#e1281e" />
          </LinearGradient>
          <LinearGradient
            id="linear-gradient-3"
            x1={7.95}
            y1={0.264}
            x2={-0.445}
            y2={1.099}
            gradientUnits="objectBoundingBox">
            <Stop offset={0} stopColor="#6dbf47" />
            <Stop offset={0.399} stopColor="#8bd768" />
            <Stop offset={0.727} stopColor="#dfc729" />
            <Stop offset={1} stopColor="#e1281e" />
          </LinearGradient>
        </Defs>
        <G
          id="Color-Chart"
          rotation={90}
          originX={width / 2}
          originY={width / 2}>
          <Path
            id="Path_1527a"
            data-name="Path 1527"
            d={d1.d}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={ratio > part1Ratio ? 'url(#linear-gradient-3)' : '#9e9e9e'}
          />
          <Path
            id="Path_1528a"
            data-name="Path 1527"
            d={d2.d}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={ratio > part2Ratio ? 'url(#linear-gradient-2)' : '#9e9e9e'}
          />
          <Path
            id="Path_1529a"
            data-name="Path 1527"
            d={d3.d}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={ratio > part3Ratio ? 'url(#linear-gradient)' : '#9e9e9e'}
          />
          <Path
            id="Path_1530a"
            data-name="Path 1527"
            d={d4.d}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={'#9e9e9e'}
          />
          <AnimatedPath
            id="Path_1527b"
            data-name="Path 1527"
            d={progressPath.d}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={color}
          />
          <Circle
            cx={progressPath.start.x}
            cy={progressPath.start.y}
            r="12"
            strokeWidth={4}
            stroke="#8bd768"
            fill="#fff"
          />
        </G>
      </Svg>
    </View>
  );
};

export default SemiCircularProgress;
