import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Rect, Text as TextSVG, Svg, Path, Circle} from 'react-native-svg';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Foundation';

import BarGraph from './BarGraph';

Icon.loadFont();

import {LineChart} from 'react-native-chart-kit';
import {
  Chart,
  VerticalAxis,
  HorizontalAxis,
  Line,
  Area,
  Tooltip,
  ChartDataPoint,
  Stroke,
} from 'react-native-responsive-linechart';

// const {height, width} = Dimensions.get('window');

const CarChart = () => {
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker 1</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <View style={{marginVertical: 20, borderWidth: 1}}>
        <LineChart
          data={{
            // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                data: [10, 20, 30, 40],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width * 0.7} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yLabelsOffset={1}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: 'red',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#80BB56',
            // labelColor: (opacity = 0.2) => `rgba(255, 255, 0, ${opacity})`,
            labelColor: () => 'red',
            style: {
              // borderRadius: 16,
              backgroundColor: 'red',
            },
            propsForDots: {
              r: '1',
              strokeWidth: '2',
              stroke: '#80BB56',
              fill: 'white',
            },
            fillShadowGradient: '#80BB56',
          }}
          // onDataPointClick: (value, dataset, getColor) => console.log(value, dataset, getColor),
          // bezier
          style={
            {
              // marginVertical: 8,
              // borderRadius: 16,
              // backgroundColor: 'blue',
            }
          }
          withDots={true}
          // withOuterLines={false}
          withVerticalLines={true}
          withHorizontalLines={false}
          // withInnerLines={false}
          withShadow={true}
          withVerticalLabels={true}
          withHorizontalLabels={false}
          fromZero={true}
          decorator={() => {
            return tooltipPos.visible ? (
              <View>
                <Svg>
                  <Path
                    fill="#80BB56"
                    x={tooltipPos.x - 12}
                    y={tooltipPos.y - 40}
                    d="M24 1H0v17h8l4 5.111L16 18h8z"
                  />

                  <TextSVG
                    x={tooltipPos.x}
                    y={tooltipPos.y - 26}
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="middle">
                    {tooltipPos.value}
                  </TextSVG>

                  <Path
                    fill="#80BB56"
                    x={tooltipPos.x - 12}
                    y={tooltipPos.y - 14}
                    d="M12 .288l2.833 8.718H24l-7.417 5.389 2.833 8.718L12 17.725l-7.417 5.388 2.833-8.718L0 9.006h9.167z"
                  />
                </Svg>
              </View>
            ) : null;
          }}
          onDataPointClick={data => {
            console.log('data: ', data);
            let isSamePoint =
              tooltipPos.x === data.x && tooltipPos.y === data.y;

            isSamePoint
              ? setTooltipPos(previousState => {
                  return {
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible,
                  };
                })
              : setTooltipPos({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
        />
      </View>
    </View>
  );
};

const CarChart1 = () => {
  let [tooltipPos, setTooltipPos] = useState({
    x: 0,
    y: 0,
    visible: false,
    value: 0,
  });

  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker 1-A</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <View style={{marginVertical: 20, borderWidth: 1}}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
              {
                data: [10, 20, 30, 40],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width * 0.8} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yLabelsOffset={1}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: 'red',
            backgroundGradientFrom: 'white',
            backgroundGradientTo: 'white',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => '#80BB56',

            labelColor: () => 'black',
            style: {},
            propsForDots: {
              r: '1',
              strokeWidth: '2',
              stroke: '#80BB56',
              fill: 'white',
            },
            fillShadowGradient: '#80BB56',
          }}
          style={{}}
          withDots={true}
          withVerticalLines={false}
          withHorizontalLines={true}
          withShadow={true}
          withVerticalLabels={true}
          withHorizontalLabels={false}
          fromZero={false}
          decorator={() => {
            return tooltipPos.visible ? (
              <View>
                <Svg>
                  <Path
                    fill="#80BB56"
                    x={tooltipPos.x - 12}
                    y={tooltipPos.y - 36}
                    d="M24 1H0v17h8l4 5.111L16 18h8z"
                  />

                  <TextSVG
                    x={tooltipPos.x}
                    y={tooltipPos.y - 22}
                    fill="white"
                    fontSize="14"
                    fontWeight="bold"
                    textAnchor="middle">
                    {tooltipPos.value}
                  </TextSVG>

                  <Circle
                    fill="white"
                    r={6}
                    strokeWidth={2}
                    stroke="#80BB56"
                    cx={8}
                    cy={8}
                    x={tooltipPos.x - 8}
                    y={tooltipPos.y - 8}
                  />
                </Svg>
              </View>
            ) : null;
          }}
          onDataPointClick={data => {
            console.log('data: ', data);
            let isSamePoint =
              tooltipPos.x === data.x && tooltipPos.y === data.y;

            isSamePoint
              ? setTooltipPos(previousState => {
                  return {
                    ...previousState,
                    value: data.value,
                    visible: !previousState.visible,
                  };
                })
              : setTooltipPos({
                  x: data.x,
                  value: data.value,
                  y: data.y,
                  visible: true,
                });
          }}
        />
      </View>
    </View>
  );
};

const CarChart2 = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker 2</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <View style={{marginVertical: 20}}>
        <Chart
          style={{height: 200, width: 400}}
          data={[
            {x: -2, y: 15},
            {x: -1, y: 10},
            {x: 0, y: 12},
            {x: 1, y: 7},
            {x: 2, y: 6},
            {x: 3, y: 3},
            {x: 4, y: 5},
            {x: 5, y: 8},
            {x: 6, y: 12},
            {x: 7, y: 14},
            {x: 8, y: 12},
            {x: 9, y: 13.5},
            {x: 10, y: 18},
          ]}
          padding={{left: 40, bottom: 20, right: 20, top: 20}}
          xDomain={{min: -2, max: 10}}
          yDomain={{min: -4, max: 20}}
          // setViewportOrigin={{x: 200, y: 300}}
        >
          <VerticalAxis
            tickCount={10}
            theme={{labels: {formatter: v => v.toFixed(2)}}}
          />
          <HorizontalAxis tickCount={3} />
          <Area
            theme={{
              gradient: {
                from: {color: '#44bd32'},
                to: {color: '#44bd32', opacity: 0.2},
              },
            }}
          />
          <Line theme={{stroke: {color: '#44bd32', width: 10}}} />
        </Chart>
      </View>
    </View>
  );
};

const CardChart3 = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker 3</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <View style={{marginVertical: 20}}>
        <Chart
          style={{height: 200, width: 400}}
          data={[
            {x: -2, y: 15},
            {x: -1, y: 10},
            {x: 0, y: 12},
            {x: 1, y: 4},
            {x: 2, y: 6},
            {x: 3, y: 8},
            {x: 4, y: 10},
            {x: 5, y: 8},
            {x: 6, y: 12},
            {x: 7, y: 14},
            {x: 8, y: 12},
            {x: 9, y: 13.5},
            {x: 10, y: 18},
          ]}
          padding={{left: 40, bottom: 20, right: 20, top: 20}}
          xDomain={{min: -2, max: 10}}
          yDomain={{min: 0, max: 20}}>
          <VerticalAxis
            tickCount={11}
            theme={{
              axis: {
                visible: true,
                stroke: {
                  color: '#bbb',
                  width: 2,
                  opacity: 1,
                  dashArray: [],
                },
                dx: 0,
              },
              grid: {
                visible: false,
                stroke: {
                  color: 'red',
                  width: 1,
                  opacity: 1,
                  dashArray: [],
                },
              },
              ticks: {
                visible: true,
                stroke: {
                  color: 'red',
                  width: 1,
                  opacity: 1,
                },
                dx: 0,
                length: 6,
              },
              labels: {
                visible: true,
                label: {
                  color: '#000',
                  fontSize: 10,
                  fontWeight: 300,
                  textAnchor: 'end',
                  opacity: 1,
                  dx: -10,
                  dy: 4,
                  rotation: 0,
                },
                formatter: (v: number) => String(v),
              },
            }}
          />
          <HorizontalAxis
            tickCount={5}
            theme={{
              axis: {stroke: {color: '#aaa', width: 2}},
              ticks: {stroke: {color: '#aaa', width: 2}},
              labels: {
                label: {rotation: 0},
                formatter: v => {
                  // return v.toFixed(1);
                  return 'june';
                },
              },
            }}
          />
          <Area
            theme={{
              gradient: {
                from: {color: '#ffa502'},
                to: {color: '#ffa502', opacity: 0.4},
              },
            }}
          />
          <Line
            theme={{
              stroke: {
                color: 'red',
                width: 1,
                opacity: 1,
                dashArray: [],
              },
              scatter: {
                default: {
                  width: 5,
                  height: 5,
                  dx: 0,
                  dy: 0,
                  rx: 2,
                  color: 'black',
                  border: {
                    color: 'red',
                    width: 2,
                    opacity: 1,
                  },
                },
                selected: {
                  width: 8,
                  height: 8,
                  dx: 0,
                  dy: 0,
                  rx: 6,
                  color: 'red',
                },
              },
            }}
            smoothing="none"
            hideTooltipAfter={10}
            hideTooltipOnDragEnd={false}
            tooltipComponent={<Tooltip />}
          />
        </Chart>
      </View>
    </View>
  );
};

const CardChart4 = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker 4</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <View style={{marginVertical: 20}}>
        <Chart
          style={{height: 200, width: 400}}
          data={[
            {x: -2, y: 15},
            {x: -1, y: 10},
            {x: 0, y: 12},
            {x: 1, y: 7},
            {x: 2, y: 6},
            {x: 3, y: 3},
            {x: 4, y: 5},
            {x: 5, y: 8},
            {x: 6, y: 12},
            {x: 7, y: 14},
            {x: 8, y: 12},
            {x: 9, y: 13.5},
            {x: 10, y: 18},
          ]}
          padding={{left: 40, bottom: 20, right: 20, top: 20}}
          xDomain={{min: -2, max: 10}}
          yDomain={{min: -4, max: 20}}>
          <VerticalAxis
            tickCount={10}
            theme={{labels: {formatter: v => v.toFixed(2)}}}
          />
          <HorizontalAxis tickCount={3} />
          <Area
            theme={{
              gradient: {
                from: {color: '#44bd32'},
                to: {color: '#44bd32', opacity: 0.2},
              },
            }}
          />
          <Line
            tooltipComponent={<Tooltip />}
            theme={{
              stroke: {color: '#44bd32', width: 5},
              scatter: {
                default: {width: 8, height: 8, rx: 4, color: '#44ad32'},
                selected: {color: 'red'},
              },
            }}
          />
        </Chart>
      </View>
    </View>
  );
};

const CardChart5 = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>Progress Tracker 5</Text>
        <Text style={styles.goodJob}>
          Good job, Shanmon! You can see big wins when you three on-time
          payments
        </Text>
      </View>
      <View style={{marginVertical: 20}}>
        <Chart
          style={{height: 200, width: 400}}
          data={[
            {x: -2, y: 15},
            {x: -1, y: 10},
            {x: 0, y: 12},
            {x: 1, y: 7},
            {x: 2, y: 6},
            {x: 3, y: 3},
            {x: 4, y: 5},
            {x: 5, y: 8},
            {x: 6, y: 12},
            {x: 7, y: 14},
            {x: 8, y: 12},
            {x: 9, y: 13.5},
            {x: 10, y: 18},
          ]}
          padding={{left: 40, bottom: 20, right: 20, top: 20}}
          xDomain={{min: -2, max: 10}}
          yDomain={{min: -4, max: 20}}>
          {/* <VerticalAxis
            tickCount={10}
            theme={{labels: {formatter: (v) => v.toFixed(2)}}}
          /> */}
          <HorizontalAxis tickCount={8} theme={{}} />
          <Area
            theme={{
              gradient: {
                from: {color: '#44bd32'},
                to: {color: '#44bd32', opacity: 0.2},
              },
            }}
          />
          <Line
            tooltipComponent={
              <Tooltip
                theme={{
                  label: {
                    color: 'white',
                    fontSize: 12,
                    fontWeight: 700,
                    // fontFamily: 'your font here'
                    textAnchor: 'middle',
                    opacity: 1,
                    dx: 0,
                    dy: 16.5,
                  },
                  shape: {
                    width: 30,
                    height: 20,
                    dx: 0,
                    dy: 20,
                    rx: 4,
                    color: 'red',
                    // d = 'M24 1H0v17h8l4 5.111L16 18h8z',
                  },
                  formatter: (v: ChartDataPoint) => {
                    console.log('v: ', v);
                    return String(v.y);
                  },
                }}
              />
            }
            // tooltipComponent={<Icon name="star" color={'#44bd32'} size={20} />}
            theme={{
              stroke: {color: '#44bd32', width: 2}, // line
              scatter: {
                default: {
                  width: 16,
                  height: 16,
                  rx: 8,
                  color: '#442',
                  // border: 2,
                  border: {
                    color: 'red',
                    width: 8,
                  },
                },
                selected: {color: 'red'},
              },
            }}
          />
        </Chart>
      </View>
    </View>
  );
};

const CardChart6 = () => {
  const color = '#FFC77D';

  const data = [
    {duration: 4, column: 0},
    {duration: 7, column: 1},
    {duration: 6, column: 2},
    {duration: 7, column: 3},
    {duration: 8, column: 4},
    {duration: 5, column: 5},
    {duration: 8, column: 6},
  ];
  return (
    <View style={[styles.containerCard, {paddingVertical: 0, width: '100%'}]}>
      <View style={{marginVertical: 20, width: '100%'}}>
        <LinearGradient
          colors={['#282828', '#232323']}
          style={styles.linearGradient}>
          <View style={styles.spaceBetween}>
            <View style={styles.header}>
              <Text style={styles.header_title}>D3 + ART Bar Graph</Text>
              <Text style={styles.header_sub}>
                Made by you bc you're a bad ass.
              </Text>
            </View>

            <BarGraph color={color} data={data} />
          </View>

          <View style={styles.footer} />
        </LinearGradient>
      </View>
    </View>
  );
};

const ChartDemo = () => {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 50,
      }}>
      <Text>ChartDemo</Text>
      <CarChart />
      <CarChart1 />
      <CarChart2 />
      <CardChart3 />
      <CardChart4 />
      <CardChart5 />
      <CardChart6 />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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

  linearGradient: {
    // flex: 1,
    height: Math.round(Dimensions.get('window').height),
    // justifyContent: 'space-between',
  },
  topbar: {
    backgroundColor: 'rgba(18,18,18,0.75)',
    bottom: 2,
    height: 68,
  },
  topbar_inner: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  topbar_hamburger: {
    padding: 10,
    color: '#fff',
  },
  topbar_avatar: {
    borderRadius: 100,
    width: 25,
    height: 25,
    borderColor: '#fff',
    borderWidth: 1,
  },
  footer: {
    height: 70,
    backgroundColor: '#232323',
  },
  header: {
    paddingTop: 20,
    paddingLeft: 25,
  },
  header_title: {
    color: '#fff',
    fontSize: 34,
    textTransform: 'capitalize',
  },
  header_sub: {
    color: '#fff',
    fontSize: 16,
    fontStyle: 'italic',
  },
  spaceBetween: {
    flex: 1,
    justifyContent: 'space-between',
  },

  main: {
    marginVertical: 25,
    marginHorizontal: 0,
  },
});

export default ChartDemo;
