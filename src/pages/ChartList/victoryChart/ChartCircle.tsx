import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
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
  VictoryTooltip,
  VictoryPie,
  Slice,
  VictoryContainer,
  VictoryAnimation,
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
  Polygon,
} from 'react-native-svg';

import SemiCircularProgress from './SemiCircularProgress';

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

const data = [
  {x: 1, y: 2, label: 'one'},
  {x: 2, y: 3, label: 'two'},
  {x: 3, y: 5, label: 'three'},
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

const Chart1 = () => {
  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>My FICO8 Score</Text>
      </View>
      <View
        style={{
          // borderWidth: 1,
          width: width * 0.6,
          alignItems: 'center',
        }}>
        <Text
          style={{
            position: 'absolute',
            fontSize: 40,
            fontWeight: 'bold',
            alignSelf: 'center',
            top: 45,
          }}>
          756
        </Text>
        <View
          style={{
            position: 'absolute',
            width: width * 0.45,
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: 100,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 12, color: 'gray'}}>300</Text>
          <Text style={{fontSize: 16, fontWeight: '600', color: '#6BBD44'}}>
            VERY GOOD
          </Text>
          <Text style={{fontSize: 12, color: 'gray'}}>850</Text>
        </View>
        <AnimatedCircularProgress
          size={220}
          width={8}
          backgroundWidth={8}
          fill={60}
          tintColor="#6BBD44"
          tintColorSecondary="#6cbe45"
          backgroundColor="#B1B7BD"
          arcSweepAngle={180}
          rotation={-90}
          lineCap="butt"
          dashedBackground={{width: 60, gap: 2}}
          dashedTint={{width: 40, gap: 0}}
          renderCap={({center}) => {
            // console.log('center: ', center);
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
          style={{borderColor: 'red', borderWidth: 1}}
        />
      </View>
    </View>
  );
};

const Chart2 = () => {
  const getData = (percent) => {
    return [
      {x: 1, y: percent},
      {x: 2, y: 100 - percent},
    ];
  };

  const [percent, setPercent] = useState(25);

  const [dataChart2, setDataChart2] = useState(getData(0));

  useEffect(() => {
    let percentE = 25;
    const interval = setInterval(() => {
      percentE += Math.random() * 25;
      percentE = percentE > 100 ? 0 : percentE;
      setPercent(percentE);
      setDataChart2(percentE);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [percent, dataChart2]);

  return (
    <View style={styles.containerCard}>
      <View style={styles.headerCard}>
        <Text style={styles.titleProgress}>My FICO8 Score</Text>
      </View>
      <Svg viewBox="0 0 400 400" width="100%" height="100%">
        <VictoryPie
          standalone={false}
          animate={{duration: 1000}}
          width={400}
          height={400}
          data={dataChart2}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: {
              fill: ({datum}) => {
                const color = datum.y > 30 ? 'green' : 'red';
                return datum.x === 1 ? color : 'transparent';
              },
            },
          }}
        />
        <VictoryAnimation duration={1000} data={{percent, dataChart2}}>
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor="middle"
                verticalAnchor="middle"
                x={200}
                y={200}
                text={`${Math.round(newProps.percent)}%`}
                style={{fontSize: 45}}
              />
            );
          }}
        </VictoryAnimation>
      </Svg>
    </View>
  );
};

class Chart3 extends React.Component {
  constructor() {
    super();
    this.state = {
      percent: 25,
      data: this.getData(0),
    };
  }

  componentDidMount() {
    // let percent = 25;
    // this.setStateInterval = window.setInterval(() => {
    //   percent += Math.random() * 25;
    //   percent = percent > 100 ? 0 : percent;
    //   this.setState({
    //     percent,
    //     data: this.getData(percent),
    //   });
    // }, 4000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData(percent) {
    // console.log('getData percent: ', percent);

    return [
      {x: 1, y: percent},
      {x: 2, y: 100 - percent},
      // {x: 3, y: (100 - percent) / 4},
      // {x: 4, y: (100 - percent) / 4},
    ];
  }

  switchColor(value) {
    let color = '#e01f21';
    if (value < 25) {
      color = '#e01f21';
    } else if (value >= 25 && value < 50) {
      color = '#f8b600';
    } else if (value >= 50 && value < 75) {
      color = '#a9ee89';
    } else {
      color = '#6cbe45';
    }
    return color;
  }

  render() {
    // console.log('this.state: ', this.state);
    return (
      <View style={{borderWidth: 1, width: 400, height: 300}}>
        <View style={{position: 'absolute', zIndex: -1}}>
          {/* <Svg
            viewBox="0 0 400 300"
            width={400}
            height={300}
            style={{borderWidth: 1, borderColor: 'red'}}>
            <VictoryPie
              padAngle={1}
              endAngle={90} // where pie angel should end
              startAngle={-90} // where angel should start
              standalone={false}
              animate={{duration: 1000}}
              width={400}
              height={300}
              data={[
                {x: 1, y: 25},
                {x: 2, y: 25},
                {x: 3, y: 25},
                {x: 4, y: 25},
              ]}
              innerRadius={90}
              cornerRadius={0}
              labels={() => null}
              colorScale={['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd']}
            />
          </Svg> */}
        </View>
        {/* <View style={{position: 'absolute', zIndex: 1}}>
          <Svg
            viewBox="0 0 400 300"
            width={400}
            height={300}
            style={{borderWidth: 1, borderColor: 'red'}}>
            <VictoryPie
              // padAngle={1}
              // endAngle={90} // where pie angel should end
              // startAngle={-90} // where angel should start
              standalone={false}
              animate={{duration: 1000}}
              width={400}
              height={300}
              data={[
                {x: 1, y: 25},
                {x: 2, y: 50},
                // {x: 3, y: 25},
                // {x: 4, y: 25},
              ]}
              innerRadius={90}
              cornerRadius={0}
              labels={() => null}
              colorScale={['red', 'transparent']}
            />
          </Svg>
        </View> */}
        <View style={{position: 'absolute', zIndex: 0}}>
          <Svg
            viewBox="0 0 400 300"
            width={400}
            height={300}
            style={{borderWidth: 1, borderColor: 'blue'}}>
            <VictoryPie
              padAngle={1}
              standalone={false}
              animate={{duration: 1000}}
              width={400}
              height={300}
              endAngle={90} // where pie angel should end
              startAngle={-90} // where angel should start
              data={[
                {x: 1, y: 25},
                {x: 2, y: 25},
                {x: 3, y: 25},
                {x: 4, y: 25},
              ]}
              innerRadius={90}
              cornerRadius={0}
              labels={() => null}
              colorScale={['#e01f21', '#f8b600', '#a9ee89', 'transparent']}
            />
            <VictoryAnimation duration={1000} data={this.state}>
              {(newProps) => {
                return (
                  <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200}
                    y={200}
                    text={`${Math.round(newProps.percent)}%`}
                    style={{fontSize: 45}}
                  />
                );
              }}
            </VictoryAnimation>
          </Svg>
        </View>
      </View>
    );
  }
}

const SegmentPath = () => {
  return (
    <Path
      d=" M 100 200 A 100 100 0 0 1 127 132"
      stroke="#e01f21"
      strokeWidth={10}
      transform="translate(5 -50)"
    />
  );
};

const SegmentPath1 = () => {
  return (
    <Path
      d="M 129 129 A 100 100 225 0 1 197 100"
      stroke="#f8b600"
      strokeWidth={10}
      transform="translate(5 -50)"
    />
  );
};

const ColorChart = () => {
  return (
    <Svg width={190.005} height={95.003} viewBox="0 0 190.005 95.003">
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1={7.95}
          y1={0.264}
          x2={-0.445}
          y2={1.099}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#6dbf47" />
          <Stop offset={0.86} stopColor="#8bd768" />
          <Stop offset={0.945} stopColor="#dfc729" />
          <Stop offset={0.978} stopColor="#dfc729" />
          <Stop offset={1} stopColor="#e1281e" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-2"
          x1={7.95}
          y1={0.264}
          x2={-1.334}
          y2={3.075}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#6dbf47" />
          <Stop offset={0.35} stopColor="#8bd768" />
          <Stop offset={0.828} stopColor="#dfc729" />
          <Stop offset={1} stopColor="#e1281e" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-3"
          x1={7.95}
          y1={0.264}
          x2={-0.445}
          y2={1.099}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#6dbf47" />
          <Stop offset={0.399} stopColor="#8bd768" />
          <Stop offset={0.727} stopColor="#dfc729" />
          <Stop offset={1} stopColor="#e1281e" />
        </LinearGradient>
      </Defs>
      <G id="Color-Chart" transform="translate(-1400 138.987)">
        <Path
          id="Path_1524"
          data-name="Path 1524"
          d="M1648.6-29.974h-7.419A87.267,87.267,0,0,0,1624.434-81.6l6-4.361A94.633,94.633,0,0,1,1648.6-29.974Z"
          transform="translate(-58.59 -14.01)"
          fill="#6cbe45"
        />
        <Path
          id="Path_1525"
          data-name="Path 1525"
          d="M1598.593-97.324a87.5,87.5,0,0,0-68.356-34.244l.106-7.418a94.873,94.873,0,0,1,74.123,37.13Z"
          transform="translate(-34.279 0)"
          fill="url(#linear-gradient)"
        />
        <Path
          id="Path_1526"
          data-name="Path 1526"
          d="M1432.605-97.344l-5.872-4.534a94.88,94.88,0,0,1,74.132-37.109l.1,7.418A87.5,87.5,0,0,0,1432.605-97.344Z"
          transform="translate(-6.9)"
          fill="url(#linear-gradient-2)"
        />
        <Path
          id="Path_1527"
          data-name="Path 1527"
          d="M1407.419-29.974H1400a94.632,94.632,0,0,1,18.16-55.982l6,4.361A87.267,87.267,0,0,0,1407.419-29.974Z"
          transform="translate(0 -14.01)"
          fill="url(#linear-gradient-3)"
        />
      </G>
    </Svg>
  );
};

const ContainerChart = (point = 100) => {
  const MaxPoint = 850;
  const MinPoint = 300;
  const SegmentNumber = 4;
  const RangePoint = MaxPoint - MinPoint;
  const RangePointSegment = RangePoint / SegmentNumber;

  return (
    <View style={{borderWidth: 1, width: 400, height: 300}}>
      <Svg
        viewBox="0 0 400 300"
        width={400}
        height={300}
        style={{borderWidth: 1, borderColor: 'blue'}}>
        <Defs>
          <LinearGradient
            id="linear-gradient"
            x1={7.95}
            y1={0.264}
            x2={-0.445}
            y2={1.099}
            gradientUnits="objectBoundingBox">
            <Stop offset={0} stopColor="#6dbf47" />
            <Stop offset={0.86} stopColor="#8bd768" />
            <Stop offset={0.945} stopColor="#dfc729" />
            <Stop offset={0.978} stopColor="#dfc729" />
            <Stop offset={1} stopColor="#e1281e" />
          </LinearGradient>
          <LinearGradient
            id="linear-gradient-2"
            x1={7.95}
            y1={0.264}
            x2={-1.334}
            y2={3.075}
            gradientUnits="objectBoundingBox">
            <Stop offset={0} stopColor="#6dbf47" />
            <Stop offset={0.35} stopColor="#8bd768" />
            <Stop offset={0.828} stopColor="#dfc729" />
            <Stop offset={1} stopColor="#e1281e" />
          </LinearGradient>
          <LinearGradient
            id="linear-gradient-3"
            x1={7.95}
            y1={0.264}
            x2={-0.445}
            y2={1.099}
            gradientUnits="objectBoundingBox">
            <Stop offset={0} stopColor="#6dbf47" />
            <Stop offset={0.399} stopColor="#8bd768" />
            <Stop offset={0.727} stopColor="#dfc729" />
            <Stop offset={1} stopColor="#e1281e" />
          </LinearGradient>
        </Defs>
        <VictoryPie
          padAngle={1}
          endAngle={90} // where pie angel should end
          startAngle={-90} // where angel should start
          standalone={false}
          animate={{duration: 1000}}
          width={400}
          height={300}
          data={[
            {x: 1, y: RangePointSegment, symbol: 'star'},
            {x: 2, y: RangePointSegment},
            {x: 3, y: RangePointSegment},
            {x: 4, y: RangePointSegment},
          ]}
          innerRadius={90}
          cornerRadius={0}
          labels={() => null}
          colorScale={['#bdbdbd', '#bdbdbd', '#bdbdbd', '#bdbdbd']}
        />
        <G id="Color-Chart" transform="translate(-1295 190)">
          <Path
            id="Path_1524"
            data-name="Path 1524"
            d="M1648.6-29.974h-7.419A87.267,87.267,0,0,0,1624.434-81.6l6-4.361A94.633,94.633,0,0,1,1648.6-29.974Z"
            transform="translate(-58.59 -14.01)"
            fill="#6cbe45"
          />
          <Path
            id="Path_1525"
            data-name="Path 1525"
            d="M1598.593-97.324a87.5,87.5,0,0,0-68.356-34.244l.106-7.418a94.873,94.873,0,0,1,74.123,37.13Z"
            transform="translate(-34.279 0)"
            fill="url(#linear-gradient)"
          />
          <Path
            id="Path_1526"
            data-name="Path 1526"
            d="M1432.605-97.344l-5.872-4.534a94.88,94.88,0,0,1,74.132-37.109l.1,7.418A87.5,87.5,0,0,0,1432.605-97.344Z"
            transform="translate(-6.9)"
            fill="url(#linear-gradient-2)"
          />
          <Path
            id="Path_1527"
            data-name="Path 1527"
            d="M1407.419-29.974H1400a94.632,94.632,0,0,1,18.16-55.982l6,4.361A87.267,87.267,0,0,0,1407.419-29.974Z"
            transform="translate(0 -14.01)"
            fill="url(#linear-gradient-3)"
          />
        </G>
      </Svg>
    </View>
  );
};

const VictoryChartCircle = () => {
  return (
    <View style={styles.container}>
      <Chart1 />
      <SemiCircularProgress
        startValue={300}
        endValue={850}
        progressValue={530}
      />
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
    marginBottom: 20,
    // borderWidth: 1,
  },
  headerCard: {
    height: 100,
    width: '80%',
    justifyContent: 'flex-end',
  },
});

export default VictoryChartCircle;
