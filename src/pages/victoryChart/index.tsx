import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
// import {runTiming} from 'react-native-redash/lib/module/v1';
const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
} = Animated;
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryLabel,
  VictoryLine,
  VictoryArea,
  VictoryAxis,
  VictoryScatter,
  VictoryGroup,
} from 'victory-native';

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
  TSpan,
} from 'react-native-svg';

import Chart2 from './Chart1';
import ChartCircle from './ChartCircle';
import AngularGradient from './AngularGradient';
import ArcProgress from './ArcProgress';

import SegmentRound from './SegmentedRound/SegmentRound';


const dataLine = [
  {x: 0, y: 300, label: ['Oct', '2021']},
  {x: 1, y: 350, label: ['Nov', '2021']},
  {x: 2, y: 400, label: ['Dec', '2021']},
  {x: 3, y: 450, label: ['Jan', '2022']},
  {x: 4, y: 550, label: ['Feb', '2021']},
  {x: 5, y: 640, label: ['Mar', '2021']},
  {x: 6, y: 680, label: ['Apr', '2021']},
  {x: 7, y: 756, label: ['May', '2021']},
];

const dataLineScatter = [
  {x: 'Jan', y: 0},
  {x: 'Feb', y: 150},
  {x: 'Mar', y: 250},
  {x: 'Apr', y: 350},
  {x: 'May', y: 450},
  {x: 'Jun', y: 540},
  {x: 'Jul', y: 680},
  {x: 'Aug', y: 756},
];

const ScatterPoint = ({x, y, datum}) => {
  return (
    <G x={x - 28} y={y - 50} transform="translate(-1119.908 -165.92)">
      <G transform="translate(1125.908 170.92)">
        <G transform="matrix(1, 0, 0, 1, -6, -5)" filter="url(#Union_2)">
          <Path
            id="Union_2-2"
            data-name="Union 2"
            d="M16.5,21h9L21,29ZM0,21V0H42V21Z"
            transform="translate(6 5)"
            fill={datum._x === dataLine.length ? '#6cbe45' : 'transparent'}
          />
        </G>
        <TextSVG
          transform="translate(10.001 15)"
          fill={datum._x === dataLine.length ? '#fff' : 'transparent'}
          fontSize={12}
          fontWeight={700}
          letterSpacing="0.02em">
          {datum._y}
        </TextSVG>
      </G>
      <G transform="translate(1135 303)">
        <Path
          id="Path_1583"
          data-name="Path 1583"
          d="M12,17.27,18.18,21l-1.64-7.03L22,9.24l-7.19-.61L12,2,9.19,8.63,2,9.24l5.46,4.73L5.82,21Z"
          transform="translate(0 -100)"
          fill={datum._x === dataLine.length ? '#6cbe45' : 'transparent'}
        />
      </G>
    </G>
  );
};

const Chart1 = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <VictoryChart
        width={400}
        // domainPadding={{x: 10, y: 0}}
        maxDomain={{x: 8, y: 800}}
        // minDomain={{x: 0, y: 0}}
        theme={VictoryTheme.material}>
        <VictoryGroup data={dataLineScatter}>
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
          <VictoryArea
            horizontal={false}
            maxDomain={{x: 8, y: 800}}
            interpolation="linear"
            style={{
              data: {
                stroke: '#6cbe45',
                strokeWidth: 2,
                fill: 'url(#linear-gradient)',
              },
            }}
            data={dataLineScatter}
            theme={VictoryTheme.grayscale}
          />
          <VictoryScatter
            data={dataLineScatter}
            // size={8}
            // labels={({datum}) => datum.y}
            // labelComponent={<VictoryLabel dy={-10} />}
            // style={{
            //   data: {
            //     fill: ({datum}) => (datum.x === 7 ? '#6cbe45' : '#000000'),
            //     fillOpacity: 0.7,
            //     strokeWidth: 3,
            //   },
            //   labels: {
            //     fontSize: 15,
            //     fill: ({datum}) => (datum.x === 7 ? '#000000' : 'transparent'),
            //   },
            // }}
            // symbol={'star'}
            // samples={5}
            dataComponent={<ScatterPoint />}
            // y={(d) => Math.sin(2 * Math.PI * d.x)}
          />
        </VictoryGroup>
        <VictoryAxis
          // style={{
          //   axis: {stroke: 'none'},
          //   // axisLabel: {fontSize: 20, padding: 30},
          //   grid: {stroke: ({tick}) => (tick > 5 ? 'red' : 'grey')},
          //   // ticks: {stroke: 'grey', size: 10},
          //   // tickLabels: {fontSize: 15, padding: 5},
          // }}
          tickFormat={(item) => item}
          style={{
            axis: {stroke: 'gray'},
            tickLabels: {fill: 'gray'},
            grid: {stroke: '#e0e0e0', strokeWidth: 1, strokeDasharray: 0},
          }}
          crossAxis={false}
        />
      </VictoryChart>
    </View>
  );
};

const VictoryChartScreen = () => {
  const clock = new Clock();
  const config = {
    duration: 10 * 1000,
    toValue: 1,
    easing: Easing.linear,
  };
  return (
    <View style={styles.container}>
      <ChartCircle />
      {/* <SegmentRound /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  container: {
    flex: 1,
    backgroundColor: '#ECF3F8',
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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

    width: '96%',
    alignItems: 'center',
    marginBottom: 40,
  },
  headerCard: {
    height: 100,

    width: '80%',
  },
});

export default VictoryChartScreen;
