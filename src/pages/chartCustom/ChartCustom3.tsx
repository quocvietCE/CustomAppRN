import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

import {
  Svg,
  Path,
  Defs,
  LinearGradient,
  Stop,
  G,
  Rect,
  Text as TextSVG,
  Line,
} from 'react-native-svg';

import * as shape from 'd3-shape';

import {scaleTime, scaleLinear, scaleQuantile} from 'd3-scale';

const d3 = {
  shape,
};

const SVG_WIDTH = 400;
const SVG_HEIGHT = 300;

const x0 = 50;
const xAxisLength = SVG_WIDTH - x0 * 2;

const y0 = 50;
const yAxisLength = SVG_HEIGHT - y0 * 2;

const xAxisY = y0 + yAxisLength;

const dataLine = [
  {x: 0, y: 60, label: 'Mon'},
  {x: 92, y: 90, label: 'Tue'},
  {x: 135, y: 20, label: 'Wed'},
  {x: 178, y: 120, label: 'Thu'},
  // {x: 221, y: 120, label: 'Fri'},
  // {x: 264, y: 140, label: 'Sat'},
  // {x: 280, y: 180, label: 'Sun'},
];

const dataYMax = dataLine.reduce(
  (currMax, object) => Math.max(currMax, object.y),
  -Infinity,
);

const dataYMin = dataLine.reduce(
  (currMin, object) => Math.min(currMin, object.y),
  Infinity,
);

const dataYRange = dataYMax - dataYMin;

const numYTicks = 6;

const barPlotWidth = xAxisLength / dataLine.length;

const scaleX = scaleLinear().domain([0, xAxisLength]).range([x0, xAxisLength]);

const scaleY = scaleLinear()
  .domain([0, yAxisLength])
  .range([SVG_HEIGHT - y0, y0]);

const line = d3.shape
  .line()
  .x((d) => scaleX(d.x))
  .y((d) => scaleY(d.y))
  .curve(d3.shape.curveLinear)(dataLine);

const ChartCustom = () => {
  // console.log('yAxisLength: ', yAxisLength);
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <Svg width={SVG_WIDTH} height={SVG_HEIGHT} style={{borderWidth: 1}}>
        <Defs>
          <LinearGradient
            id="linear-gradient"
            y1={1}
            x2={1.034}
            y2={0.572}
            gradientUnits="objectBoundingBox">
            <Stop offset={0} stopColor="#fff" />
            <Stop offset={0.565} stopColor="#3084c6" />
            <Stop offset={1} stopColor="#6cbe45" />
          </LinearGradient>
        </Defs>

        <Path d={line} stroke="#6cbe45" strokeWidth={2} fill={'transparent'} />

        <Path
          d={`${line} L ${xAxisLength} ${xAxisY} L 0 ${xAxisY}`}
          fill="url(#linear-gradient)"
        />

        {/* X axis */}
        <Line
          x1={x0}
          y1={xAxisY}
          x2={x0 + xAxisLength}
          y2={xAxisY}
          stroke="grey"
        />

        {/* Y axis */}
        <Line
          x1={x0}
          y1={y0}
          x2={x0}
          y2={y0 + yAxisLength}
          stroke="transparent"
        />

        {Array.from({length: numYTicks}).map((_, index) => {
          const y = y0 + index * (yAxisLength / numYTicks);

          const yValue = Math.round(
            dataYMax - index * (dataYRange / numYTicks),
          );

          return (
            <G key={index}>
              <Line
                x1={x0}
                y1={y}
                x2={x0 + xAxisLength}
                y2={y}
                stroke="#e0e0e0"
                strokeWidth={1}
                fill={'red'}
              />
              <TextSVG x={x0 - 5} y={y + 5} textAnchor="end" fill={'black'}>
                {yValue}
              </TextSVG>
            </G>
          );
        })}

        {dataLine.map((object, index) => {
          const x = x0 + index * barPlotWidth;

          const yRatio = (object.y - dataYMin) / dataYRange;

          const y = y0 + (1 - yRatio) * yAxisLength;
          const height = yRatio * yAxisLength;

          const sidePadding = 10;

          return (
            <G key={index}>
              <Rect
                x={x + sidePadding / 2}
                y={y}
                fill="blue"
                // width={barPlotWidth - sidePadding}
                height={height}
              />
              <TextSVG x={x} y={xAxisY + 16} fill="gray" textAnchor="middle">
                {object.label}
              </TextSVG>
              <Line
                // x1={x + (barPlotWidth - sidePadding) / 2} // middle
                // x1={x + barPlotWidth} // sát lề phải
                x1={x}
                y1={y0}
                // x2={x + (barPlotWidth - sidePadding) / 2} // middle
                // x2={x + barPlotWidth} // sát lề phải
                x2={x}
                y2={y0 + yAxisLength}
                stroke="transparent"
              />
              {index === dataLine.length - 1 && (
                <Svg>
                  <Path
                    fill="#80BB56"
                    x={x - (barPlotWidth + sidePadding) / 2 - 10}
                    y={y + (barPlotWidth + sidePadding) / 4 - 10}
                    d="M12 .288l2.833 8.718H24l-7.417 5.389 2.833 8.718L12 17.725l-7.417 5.388 2.833-8.718L0 9.006h9.167z"
                  />
                  <Path
                    fill="#80BB56"
                    x={x - (barPlotWidth + sidePadding) / 2 - 10}
                    y={y + (barPlotWidth + sidePadding) / 4 - 36}
                    d="M24 1H0v17h8l4 5.111L16 18h8z"
                    stroke={'#80BB56'}
                    strokeWidth={2}
                  />

                  <TextSVG
                    x={x - (barPlotWidth + sidePadding) / 2 + 2}
                    y={y + (barPlotWidth + sidePadding) / 4 - 22}
                    fill="white"
                    fontSize="13"
                    fontWeight="bold"
                    textAnchor="middle">
                    {object.y}
                  </TextSVG>
                </Svg>
              )}
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

const CharCustom3 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ChartCustom />
    </View>
  );
};
export default CharCustom3;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    backgroundColor: '#ECF3F8',
    padding: 10,
  },
  titleProgress: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  goodJob: {
    fontSize: 14,
    color: '#A6A9AA',
    textAlign: 'center',
    marginBottom: 20,
  },
  containerCard: {
    paddingVertical: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    backgroundColor: 'white',
    // flex: 1,
    width: '96%',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerCard: {
    height: 100,
    // backgroundColor: 'red',
    width: '80%',
    // flex: 1,
  },
});
