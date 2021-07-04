import React from 'react';
import {View, Text, Animated, ScrollView, Dimensions} from 'react-native';

import CircularProgress from './CircularProgress';
import CircularProgress2 from './CircularProgress2';
import Progress from './ProgressBar';
import ProgressBar from './ProgressBar1';
import DonutChart from './DonutChart';

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Circle} from 'react-native-svg';

import {LineChart, ProgressChart} from 'react-native-chart-kit';

import colormap from 'colormap';

const arrnum = 16;
let colors = colormap({
  colormap: 'warm',
  nshades: arrnum + 10,
  format: 'hex',
  alpha: 1,
});

const MAX_POINTS = 500;
const POINTS = 325;

const screenWidth = Dimensions.get('window').width;
const fill = (POINTS / MAX_POINTS) * 100;

const {} = Animated;

const dataDonut = [
  {
    percentage: 8,
    color: 'tomato',
    max: 10,
  },
  {
    percentage: 14,
    color: 'skyblue',
    max: 20,
  },
  {
    percentage: 92,
    color: 'gold',
    max: 100,
  },
  {
    percentage: 240,
    color: '#222',
    max: 500,
  },
];

const dataProgress = {
  labels: ['Swim'], // optional
  data: [0.4],
};

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const Chart = () => {
  const [index, setIndex] = React.useState(1);
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 50,
      }}>
      <Text>Chart</Text>
      <CircularProgress />

      <Progress step={4} steps={10} height={20} />

      {[...Array(arrnum).keys()].map(i => {
        const max = Math.floor(Math.random() * 40) + 10;
        const step = Math.max(2, Math.floor(Math.random() * max));
        return (
          <ProgressBar
            step={i + 1}
            steps={arrnum}
            height={18}
            key={i}
            color={colors[i]}
          />
        );
      })}

      <CircularProgress2 progress={80} />

      <DonutChart />
      {dataDonut.map((p, i) => {
        return (
          <DonutChart
            key={i}
            percentage={p.percentage}
            color={p.color}
            delay={1000}
            max={p.max}
          />
        );
      })}

      <View
        style={{
          width: '100%',
          borderWidth: 1,
          height: 180,
          alignItem: 'center',
          padding: 20,
        }}>
        <AnimatedCircularProgress
          size={180}
          width={8}
          backgroundWidth={8}
          fill={10}
          tintColor="#6BBD44"
          tintColorSecondary="#6BBD44"
          backgroundColor="#B1B7BD"
          arcSweepAngle={180}
          rotation={-90}
          lineCap="square"
          renderCap={({center}) => {
            console.log('center: ', center);
            return (
              <Circle
                cx={center.x}
                cy={center.y}
                r="10"
                fill="white"
                stroke="#6BBD44"
                strokeWidth="4"
              />
            );
          }}
          padding={10}
        />
      </View>

      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          // bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <ProgressChart
        data={dataProgress}
        width={screenWidth}
        height={220}
        strokeWidth={8}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </ScrollView>
  );
};

export default Chart;
