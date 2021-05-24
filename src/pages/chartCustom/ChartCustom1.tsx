import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Animated,
  TextInput,
  Text,
} from 'react-native';
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
import * as path from 'svg-path-properties';
import * as shape from 'd3-shape';

import {scaleTime, scaleLinear, scaleQuantile} from 'd3-scale';

const d3 = {
  shape,
};

// x:  50
// [Mon May 03 2021 11:37:08.357]  LOG      y:  250
// [Mon May 03 2021 11:37:08.459]  LOG      height:  0
// [Mon May 03 2021 11:37:08.476]  LOG      x:  92.85714285714286
// [Mon May 03 2021 11:37:08.478]  LOG      y:  216.66666666666669
// [Mon May 03 2021 11:37:08.482]  LOG      height:  33.33333333333333
// [Mon May 03 2021 11:37:08.510]  LOG      x:  135.71428571428572
// [Mon May 03 2021 11:37:08.524]  LOG      y:  183.33333333333334
// [Mon May 03 2021 11:37:08.529]  LOG      height:  66.66666666666666
// [Mon May 03 2021 11:37:08.539]  LOG      x:  178.57142857142856
// [Mon May 03 2021 11:37:08.542]  LOG      y:  150
// [Mon May 03 2021 11:37:08.543]  LOG      height:  100
// [Mon May 03 2021 11:37:08.544]  LOG      x:  221.42857142857142
// [Mon May 03 2021 11:37:08.545]  LOG      y:  116.66666666666667
// [Mon May 03 2021 11:37:08.548]  LOG      height:  133.33333333333331
// [Mon May 03 2021 11:37:08.549]  LOG      x:  264.2857142857143
// [Mon May 03 2021 11:37:08.555]  LOG      y:  83.33333333333333
// [Mon May 03 2021 11:37:08.556]  LOG      height:  166.66666666666669
// [Mon May 03 2021 11:37:08.557]  LOG      x:  307.1428571428571
// [Mon May 03 2021 11:37:08.557]  LOG      y:  50
// [Mon May 03 2021 11:37:08.558]  LOG      height:  200

const dataLine = [
  {x: 0, y: 0, label: 'Mon'},
  {x: 92, y: 30, label: 'Tue'},
  {x: 135, y: 60, label: 'Wed'},
  {x: 178, y: 90, label: 'Thu'},
  {x: 221, y: 120, label: 'Fri'},
  {x: 264, y: 140, label: 'Sat'},
  {x: 300, y: 200, label: 'Sun'},
];

const dataYMax1 = dataLine.reduce(
  (currMax, object) => Math.max(currMax, object.y),
  -Infinity,
);
console.log('dataYMax1: ', dataYMax1);
const SVG_WIDTH = 400;
const SVG_HEIGHT = 300;

const x0 = 50;
const xAxisLength = SVG_WIDTH - x0 * 2;

const y0 = 50;
const yAxisLength = SVG_HEIGHT - y0 * 2;

const xAxisY = y0 + yAxisLength;

const dataDate = [
  {x: new Date(2021, 9, 1), y: 0},
  {x: new Date(2021, 10, 1), y: 10},
  {x: new Date(2021, 11, 1), y: 30},
  {x: new Date(2021, 12, 1), y: 60},
  {x: new Date(2022, 1, 1), y: 90},
  {x: new Date(2022, 2, 1), y: 120},
  {x: new Date(2022, 3, 1), y: 140},
  {x: new Date(2022, 4, 1), y: 160},
  {x: new Date(2022, 5, 1), y: 200},
];

const data = [
  ['Mon', 4],
  ['Tue', 6],
  ['Wed', 8],
  ['Thu', 10],
  ['Fri', 12],
  ['Sat', 14],
  ['Sun', 16],
];
const dataYMax = data.reduce(
  (currMax, [_, dataY]) => Math.max(currMax, dataY),
  -Infinity,
);

const dataYMin = data.reduce(
  (currMin, [_, dataY]) => Math.min(currMin, dataY),
  Infinity,
);
const dataYRange = dataYMax - dataYMin;

const numYTicks = 6;

const barPlotWidth = xAxisLength / data.length;

const scaleX = scaleLinear().domain([0, xAxisLength]).range([x0, xAxisLength]);

const scaleY = scaleLinear()
  .domain([0, yAxisLength])
  .range([SVG_HEIGHT - y0, y0]);

const line = d3.shape
  .line()
  .x((d) => {
    console.log('d: ', d);
    return scaleX(d.x);
  })
  .y((d) => scaleY(d.y))
  .curve(d3.shape.curveLinear)(dataLine);

// const LineData =
//   'M50,250.L.0,92L.,.66666666666666L10171.42857142857,150L12628.57142857143,128L15085.714285714286,106L17542.85714285714,83.33333333333333';
// const LineDataA =
//   'M50.1428571428573,250.33333333333333L5257.142857142857,1L7714.285714285714,150L10171.42857142857,150L12628.57142857143,172.66666666666666L15085.714285714286,400.66666666666669L17542.85714285714,400.66666666666669';
// const LineData1 =
//   'M50,195L183.42857142857142,163.33333333333334L195.65714285714284,68.33333333333334L379.0857142857143,68.33333333333334L391.3142857142857,5L428,36.66666666666666';
// data.map(([day, dataY], index) => {
//   const x = x0 + index * barPlotWidth;

//   console.log('x: ', x);

//   const yRatio = (dataY - dataYMin) / dataYRange;

//   const y = y0 + (1 - yRatio) * yAxisLength;
//   const height = yRatio * yAxisLength;

//   const sidePadding = 10;
// });

const CardChart = () => {
  console.log('xAxisLength: ', xAxisLength);
  console.log('yAxisLength: ', yAxisLength);
  console.log('xAxisY: ', xAxisY);
  console.log('dataYMax: ', dataYMax);
  console.log('dataYMin: ', dataYMin);
  console.log('dataYRange: ', dataYRange);
  console.log('barPlotWidth: ', barPlotWidth);
  console.log('line: ', line);
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      {/* <View style={{marginVertical: 20}} /> */}
      <View>
        <Svg width={SVG_WIDTH} height={SVG_HEIGHT} style={{borderWidth: 1}}>
          {/* X axis */}
          <Line
            x1={50}
            y1={xAxisY}
            x2={x0 + xAxisLength}
            y2={xAxisY}
            stroke="grey"
          />
          {/* <TextSVG x={x0 + xAxisLength + 5} y={xAxisY + 4} fill="black">
            Day
          </TextSVG> */}

          {/* Y axis */}
          <Line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke="grey" />
          {Array.from({length: numYTicks}).map((_, index) => {
            const y = y0 + index * (yAxisLength / numYTicks);

            const yValue = Math.round(
              dataYMax - index * (dataYRange / numYTicks),
            );

            return (
              <G key={index}>
                {/* <Line
                  x1={x0}
                  y1={y}
                  x2={x0 - 5}
                  y2={y}
                  stroke="red"
                  strokeWidth={1}
                  fill={'red'}
                />
                <TextSVG x={x0 - 5} y={y + 5} textAnchor="end" fill={'black'}>
                  {yValue}
                </TextSVG> */}
              </G>
            );
          })}
          {/* <TextSVG x={x0} y={y0 - 8} textAnchor="middle" fill="black">
            $
          </TextSVG> */}

          {/* Bar plots */}
          {data.map(([day, dataY], index) => {
            const x = x0 + index * barPlotWidth;

            console.log('x: ', x);
            {
              /* console.log('y: ', y); */
            }

            const yRatio = (dataY - dataYMin) / dataYRange;

            const y = y0 + (1 - yRatio) * yAxisLength;
            const height = yRatio * yAxisLength;

            const sidePadding = 10;
            console.log('y: ', y);
            console.log('height: ', height);
            return (
              <G key={index}>
                <Rect
                  x={x + sidePadding / 2}
                  y={y}
                  fill="blue"
                  width={barPlotWidth - sidePadding}
                  height={height}
                />
                <TextSVG
                  x={x + barPlotWidth / 2}
                  y={xAxisY + 16}
                  fill="gray"
                  textAnchor="middle">
                  {day}
                </TextSVG>
                <Line
                  x1={x + barPlotWidth}
                  y1={y0}
                  x2={x + barPlotWidth}
                  y2={y0 + yAxisLength}
                  stroke="gray"
                />
              </G>
            );
          })}
          <Path
            d={line}
            stroke="#6cbe45"
            strokeWidth={2}
            fill={'transparent'}
          />
        </Svg>
      </View>
    </View>
  );
};

const ChartCustom = () => {
  return (
    <View style={styles.root}>
      <CardChart />
    </View>
  );
};

export default ChartCustom;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
