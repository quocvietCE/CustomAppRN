import React from 'react';
import {ART} from 'react-native';
import {scaleBand, scaleLinear} from 'd3-scale';

// const {Group, Shape, Path, Surface} = ART;
import {Svg, Path, Defs, Text, Line, Rect} from 'react-native-svg';

const Columns = ({data, width, height, color}) => {
  return (
    <Svg width={width} height={height}>
      {data.map((item, index) => {
        let config = {
          index: index,
          width: width,
          height: height,
          data: data,
          color: color,
          lineWidth: 18,
        };

        return (
          <Svg key={index} x={60} y={-20}>
            {/* <ConstructShape
              config={{...config, ...{color: 'white', type: 'main'}}}
            />
            <ConstructShape
              config={{
                ...config,
                ...{color: color, type: 'top', lineHeight: 5},
              }}
            /> */}
          </Svg>
        );
      })}
    </Svg>
  );
};

export default Columns;

const ConstructShape = ({
  config: {index, width, data, height, color, lineWidth, lineHeight, type},
}) => {
  // set X
  let x = _createX(width);
  x.domain(
    data.map((d) => {
      return d.column;
    }),
  );
  let xPos = x(data[index].column);

  // set Y
  let y = _createY(height);
  let barHeight = y(data[index].duration);

  // set starting position from x position
  let moveToY = type == 'top' ? height - barHeight : height;

  if (!lineHeight) {
    lineHeight = -barHeight;
  }

  // Draw path
  let d = new Path()
    .moveTo(xPos, moveToY)
    .line(lineWidth, 0)
    .line(0, lineHeight)
    .line(-lineWidth, 0);

  return <Line d={d} fill={color} />;
};

const _createX = (width) => {
  return scaleBand().rangeRound([20, width - 75]);
};

const _createY = (height) => {
  return scaleLinear().domain([0, 16]).range([0, height]);
};
