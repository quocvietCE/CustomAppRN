import React from 'react';
import {StyleSheet, ART} from 'react-native';
import {scaleLinear} from 'd3-scale';

// const {Surface, Group, Shape, Path, Text} = ART;
import {Svg, Path, Defs, Text, Line} from 'react-native-svg';

import * as shape from 'd3-shape';

export default function yAxis({width, height, isNap}) {
  let yValues = ['14', '12', '10', '8', '6', '4', '2', '0'];
  let gridPoints = generateGridPoints(yValues.length);

  return (
    <Svg style={styles.yAxis} width={width} height={height}>
      {gridPoints.map((point, index) => (
        <Svg key={index} x={0} y={-20}>
          <Line
            d={getScaleTicks(index, gridPoints, width, height)}
            fill="white"
            stroke="white"
            strokeWidth={1}
          />

          <Svg x={10}>
            <Text
              fill="#717171"
              x={40}
              y={getScalePosition(index, gridPoints, height)}
              font={'14px Arial'}
              alignment="right">
              {yValues[index]}
            </Text>
          </Svg>
        </Svg>
      ))}
    </Svg>
  );
}

const generateGridPoints = (amount) => {
  let points = [];
  Array(amount)
    .fill()
    .forEach((i, index) => {
      let pos = (100 / amount) * index;
      points.push(pos);
    });
  points.shift();
  points.push(100);

  return points;
};

const d3 = {
  shape,
};

// const scaleX = scaleTime()
//   .domain([new Date(2018, 9, 1), new Date(2018, 10, 5)])
//   .range([0, width]);

// const scaleY = scaleLinear()
//   .domain([0, 300])
//   .range([height - verticalPadding, verticalPadding]);

// const scaleLabel = scaleQuantile().domain([0, 300]).range([0, 200, 300]);

// const line = d3.shape
//   .line()
//   .x((d) => scaleX(d.x))
//   .y((d) => scaleY(d.y))
//   .curve(d3.shape.curveLinear)(data); //curveLinear, curveStep, curveBasis

const getScaleTicks = (index, gridPoints, width, height) => {
  let y = scaleLinear()
    .domain([0, 100])
    .range([0, height - 10]);
  let position = y(gridPoints[index]);
  // let path = d3.path();
  // return new Path().moveTo(0, position).line(width, 0);
  return null;
};

const getScalePosition = (index, gridPoints, height) => {
  let y = scaleLinear()
    .domain([0, 100])
    .range([-10, height - 20]);
  return y(gridPoints[index]);
};

const styles = StyleSheet.create({
  yAxis: {
    position: 'absolute',
  },
});
