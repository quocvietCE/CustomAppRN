import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Animated,
  TextInput,
  ScrollView,
} from 'react-native';

import {
  Svg,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Text as TextSVG,
  Line,
  G,
  Rect,
} from 'react-native-svg';
import * as path from 'svg-path-properties';
import * as shape from 'd3-shape';
import {scaleTime, scaleLinear, scaleQuantile} from 'd3-scale';

const d3 = {
  shape,
};

const height = 200;
const {width} = Dimensions.get('window');
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;

const data = [
  {x: new Date(2018, 9, 1), y: 0},
  {x: new Date(2018, 9, 16), y: 50},
  {x: new Date(2018, 9, 17), y: 200},
  {x: new Date(2018, 10, 1), y: 200},
  {x: new Date(2018, 10, 2), y: 300},
  {x: new Date(2018, 10, 5), y: 250},
];

const scaleX = scaleLinear()
  .domain([new Date(2018, 9, 1), new Date(2018, 10, 5)])
  .range([0, width]);

const scaleY = scaleLinear()
  .domain([0, 300])
  .range([height - verticalPadding, verticalPadding]);

const scaleLabel = scaleQuantile().domain([0, 300]).range([0, 200, 300]);

const line = d3.shape
  .line()
  .x((d) => scaleX(d.x))
  .y((d) => scaleY(d.y))
  .curve(d3.shape.curveLinear)(data); //curveLinear, curveStep, curveBasis

const properties = path.svgPathProperties(line);
const lineLength = properties.getTotalLength();

const SVG_WIDTH = 400;
const SVG_HEIGHT = 300;

const x0 = 50;
const xAxisLength = SVG_WIDTH - x0 * 2;

const y0 = 50;
const yAxisLength = SVG_HEIGHT - y0 * 2;

const xAxisY = y0 + yAxisLength;

const dataChart = [
  ['Mon', 12],
  ['Tue', 14],
  ['Wed', 12],
  ['Thu', 4],
  ['Fri', 5],
  ['Sat', 18],
  ['Sun', 10],
];

const dataYMax = dataChart.reduce(
  (currMax, [_, dataY]) => Math.max(currMax, dataY),
  -Infinity,
);
const dataYMin = dataChart.reduce(
  (currMin, [_, dataY]) => Math.min(currMin, dataY),
  Infinity,
);
const dataYRange = dataYMax - dataYMin;

const numYTicks = 5;

const barPlotWidth = xAxisLength / data.length;

class ChartCustom extends Component {
  cursor = React.createRef();

  label = React.createRef();

  state = {
    x: new Animated.Value(0),
  };

  moveCursor(value) {
    // console.log('moveCursor value: ', value);
    // console.log('moveCursor lineLength: ', lineLength);
    const {x, y} = properties.getPointAtLength(lineLength - value);
    this.cursor.current.setNativeProps({
      top: y - cursorRadius,
      left: x - cursorRadius,
    });
    const label = scaleLabel(scaleY.invert(y));
    this.label.current.setNativeProps({text: `${label} CHF`});
  }

  componentDidMount() {
    this.state.x.addListener(({value}) => this.moveCursor(value));
    this.moveCursor(0);
    console.log('data line: ', line);
  }

  render() {
    // console.log('line: ', line);
    const {x} = this.state;
    const translateX = x.interpolate({
      inputRange: [0, lineLength],
      outputRange: [width - labelWidth, 0],
      extrapolate: 'clamp',
    });
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Svg {...{width, height}}>
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
            <Path
              d={line}
              stroke="#367be2"
              strokeWidth={5}
              fill={'transparent'}
            />
            <Path
              d={`${line} L ${width} ${height} L 0 ${height}`}
              fill="url(#linear-gradient)"
            />
            <Animated.View ref={this.cursor} style={styles.cursor} />
          </Svg>
          <Animated.View style={[styles.label, {transform: [{translateX}]}]}>
            <TextInput ref={this.label} />
          </Animated.View>
          <Animated.ScrollView
            style={[StyleSheet.absoluteFill]}
            contentContainerStyle={{width: lineLength * 2}}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {x},
                  },
                },
              ],
              {useNativeDriver: true},
            )}
            horizontal
          />
        </View>
        <View>
          <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
            {/* X axis */}
            <Line
              x1={x0}
              y1={xAxisY}
              x2={x0 + xAxisLength}
              y2={xAxisY}
              stroke="grey"
            />
            <TextSVG x={x0 + xAxisLength + 5} y={xAxisY + 4} fill={'black'}>
              x
            </TextSVG>

            {/* Y axis */}
            <Line
              x1={x0}
              y1={y0}
              x2={x0}
              y2={y0 + yAxisLength}
              stroke="grey"
              fill={'black'}
            />
            <TextSVG x={x0} y={y0 - 8} textAnchor="middle" fill={'black'}>
              y
            </TextSVG>
          </Svg>
        </View>
        <View>
          <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
            {/* X axis */}
            <Line
              x1={x0}
              y1={xAxisY}
              x2={x0 + xAxisLength}
              y2={xAxisY}
              stroke="grey"
            />
            <TextSVG x={x0 + xAxisLength + 5} y={xAxisY + 4} fill="black">
              Day
            </TextSVG>

            {/* Y axis */}
            <Line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke="grey" />
            {Array.from({length: numYTicks}).map((_, index) => {
              const y = y0 + index * (yAxisLength / numYTicks);

              const yValue = Math.round(
                dataYMax - index * (dataYRange / numYTicks),
              );

              return (
                <G key={index}>
                  <Line x1={x0} y1={y} x2={x0 - 5} y2={y} stroke="grey" />
                  <TextSVG x={x0 - 5} y={y + 5} textAnchor="end">
                    {yValue}
                  </TextSVG>
                </G>
              );
            })}
            <TextSVG x={x0} y={y0 - 8} textAnchor="middle" fill="black">
              $
            </TextSVG>

            {/* Bar plots */}
            {dataChart.map(([day, dataY], index) => {
              const x = x0 + index * barPlotWidth;

              const yRatio = (dataY - dataYMin) / dataYRange;

              const y = y0 + (1 - yRatio) * yAxisLength;
              const height = yRatio * yAxisLength;

              const sidePadding = 10;

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
                    fill="black"
                    textAnchor="middle">
                    {day}
                  </TextSVG>
                </G>
              );
            })}
          </Svg>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 60,
    height,
    width,
  },
  cursor: {
    width: cursorRadius * 2,
    height: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderWidth: 3,
    borderColor: '#367be2',
    backgroundColor: 'white',
  },
  label: {
    position: 'absolute',
    top: -45,
    left: 0,
    backgroundColor: 'lightgray',
    width: labelWidth,
  },
});

export default ChartCustom;
