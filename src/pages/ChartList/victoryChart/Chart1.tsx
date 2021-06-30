import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

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
  Circle,
} from 'react-native-svg';

const {width} = Dimensions.get('window');

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
  {x: 'Sep 24', y: 500},
  {x: 'Oct 24', y: 650},
  {x: 'Nov 24', y: 450},
  {x: 'Dec 24', y: 756},
  // {x: 'May', y: 450},
  // {x: 'Jun', y: 540},
  // {x: 'Jul', y: 680},
  // {x: 'Aug', y: 756},
];

const dataColumnY = [300, 410, 520, 630, 740, 850];

const HeightChart = 300;
const HeightColumn = 300 - 80;

const ColumnLinearGradient = () => {
  return (
    <Svg width={2} height={HeightColumn}>
      <Defs>
        <LinearGradient
          id="linear-gradient1"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#6cbe45" />
          <Stop offset={0.328} stopColor="#a9ee89" />
          <Stop offset={0.649} stopColor="#f8b600" />
          <Stop offset={1} stopColor="#e01f21" />
        </LinearGradient>
      </Defs>
      <Rect
        id="Rectangle_14198"
        data-name="Rectangle 14198"
        width={2}
        height={HeightColumn}
        fill="url(#linear-gradient1)"
      />
    </Svg>
  );
};

const ScatterPoint = ({x, y, datum}) => {
  return (
    <G x={x} y={y}>
      <G transform="translate(-22 -44)">
        <G transform="matrix(1, 0, 0, 1, -6, -5)" filter="url(#Union_2)">
          <Path
            id="Union_2-2"
            data-name="Union 2"
            d="M16.5,21h9L21,29ZM0,21V0H42V21Z"
            transform="translate(6 5)"
            fill={
              datum._x === dataLineScatter.length ? '#6cbe45' : 'transparent'
            }
          />
        </G>
        <TextSVG
          transform="translate(10 15)"
          fill={datum._x === dataLineScatter.length ? '#fff' : 'transparent'}
          fontSize={12}
          fontWeight={700}
          letterSpacing="0.02em">
          {datum._y}
        </TextSVG>
      </G>
      <Circle
        r={5}
        stroke={datum._x === dataLineScatter.length ? '#6cbe45' : 'transparent'}
        fill={datum._x === dataLineScatter.length ? '#fff' : 'transparent'}
        strokeWidth={2}
        transform="translate(-1 -5)"
      />
    </G>
  );
};

const Chart1 = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>My FICO8 Score History</Text>
      </View>

      <View
        style={{
          position: 'absolute',
          left: 0,
          top: 150,
          height: HeightColumn + 20,
          width: 50,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <ColumnLinearGradient />
        <View
          style={{
            // position: 'absolute',
            // borderWidth: 1,
            height: HeightColumn + 20,
            marginLeft: 5,
            justifyContent: 'space-between',
          }}>
          {dataColumnY.reverse().map((item, index) => {
            return (
              <Text
                style={{width: 30, fontSize: 12, color: 'gray'}}
                key={`${index}`}>
                {item}
              </Text>
            );
          })}
        </View>
      </View>

      <VictoryChart
        width={380}
        height={HeightChart}
        // domainPadding={{x: 10, y: 0}}
        maxDomain={{x: dataLineScatter.length, y: 800}}
        // minDomain={{x: 0, y: 300}}
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
          <Defs>
            <LinearGradient
              id="linear-gradient-column"
              x1={0.5}
              x2={0.5}
              y2={1}
              gradientUnits="objectBoundingBox">
              <Stop offset={0} stopColor="#6cbe45" />
              <Stop offset={0.328} stopColor="#a9ee89" />
              <Stop offset={0.649} stopColor="#f8b600" />
              <Stop offset={1} stopColor="#e01f21" />
            </LinearGradient>
          </Defs>
          <VictoryArea
            horizontal={false}
            maxDomain={{x: 8, y: 800}}
            interpolation="linear"
            style={{
              data: {
                stroke: 'url(#linear-gradient)',
                strokeWidth: 2,
                fill: 'url(#linear-gradient)',
              },
            }}
            data={dataLineScatter}
            theme={VictoryTheme.grayscale}
          />
          <VictoryScatter
            data={dataLineScatter}
            dataComponent={<ScatterPoint />}
          />
        </VictoryGroup>
        <VictoryAxis
          style={{
            axis: {stroke: '#bdbdbd'},
            tickLabels: {fill: 'gray'},
            grid: {stroke: 'transparent', strokeWidth: 1, strokeDasharray: 0},
          }}
        />
        <VictoryAxis
          style={{
            axis: {stroke: 'transparent'},
            tickLabels: {fill: 'transparent'},
            grid: {stroke: '#e0e0e0', strokeWidth: 1, strokeDasharray: 0},
          }}
          dependentAxis
        />
      </VictoryChart>
    </View>
  );
};

const VictoryChartScreen = () => {
  return (
    <View style={styles.container}>
      <Chart1 />
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

    width: width * 0.94,
    alignItems: 'center',
    marginBottom: 40,
    // borderWidth: 1,
  },
  headerCard: {
    height: 100,
    width: '80%',
    justifyContent: 'flex-end',
  },
});

export default VictoryChartScreen;
