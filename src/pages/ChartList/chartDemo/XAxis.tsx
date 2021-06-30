import React from 'react';
import {ART} from 'react-native';
import {Svg, Path, Defs, Text} from 'react-native-svg';
import {scaleBand} from 'd3-scale';
import moment from 'moment';

// const {Surface, Group, Text} = ART;

export default function xAxis({width, height}) {
  let axisValues = generateValues();

  return (
    <Svg width={width} height={height}>
      <Svg x={69}>
        {axisValues.days.map((item, index) => (
          <Text
            key={index}
            fill="#fff"
            x={getValuePosition(index, axisValues.days, width)}
            y={0}
            font={'12px Arial'}
            alignment="center"
            opacity={index === 6 ? 1 : 0.6}>
            {item}
          </Text>
        ))}

        {axisValues.nums.map((item, index) => (
          <Text
            key={index}
            fill="#fff"
            x={getValuePosition(index, axisValues.nums, width)}
            y={15}
            font={'12px Arial'}
            alignment="center"
            opacity={index === 6 ? 1 : 0.6}>
            {item}
          </Text>
        ))}
      </Svg>
    </Svg>
  );
}

const generateValues = () => {
  let days = [];
  let nums = [];
  Array(7)
    .fill()
    .forEach((i, index) => {
      days.push(moment().subtract(index, 'days').format('ddd'));
      nums.push(moment().subtract(index, 'days').format('D'));
    });
  return {days: days.reverse(), nums: nums.reverse()};
};

const getValuePosition = (index, values, width) => {
  let x = scaleBand().rangeRound([20, width - 75]);
  x.domain(
    values.map((d) => {
      return d;
    }),
  );
  return x(values[index]);
};
