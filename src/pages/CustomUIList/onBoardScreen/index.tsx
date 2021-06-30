import React, {useCallback} from 'react';
import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');

// import styles from './style';

const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: 'https://image.flaticon.com/icons/png/256/3571/3571572.png',
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571747.png',
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571680.png',
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://image.flaticon.com/icons/png/256/3571/3571603.png',
  },
];

export const Indicator = ({scrollX}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 100,
      }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 0.1) * width, i * width, (i + 1) * width];
        console.log('inputRange: ', inputRange);
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: 'clamp',
        });
        const bg = scrollX.interpolate({
          inputRange,
          outputRange: ['#FFF', '#F2F2F2', '#FFF'],
          extrapolate: 'clamp',
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 10,
              width: 10,
              backgroundColor: bg,
              borderRadius: 5,
              opacity,
              margin: 10,
              transform: [
                {
                  scale,
                },
              ],
            }}
          />
        );
      })}
    </View>
  );
};

const Backdrop = ({scrollX}) => {
  const bg = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        // StyleSheet.absoluteFillObject,
        {
          backgroundColor: bg,
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: -1,
        },
      ]}
    />
  );
};

const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['35deg', '0deg', '35deg'],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height, 0],
  });
  return (
    <Animated.View
      style={{
        width: height,
        height: height,
        backgroundColor: '#fff',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const OnboardScreen = ({navigation}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Square scrollX={scrollX} />
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapperItem}>
              <View style={styles.headerItem}>
                <Image source={{uri: item.image}} style={styles.imageItem} />
              </View>
              <View style={styles.bottomItem}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          );
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperItem: {width, alignItems: 'center', padding: 20},
  imageItem: {
    width: width / 2,
    height: width / 2,
    resizeMode: 'contain',
  },
  title: {fontWeight: '800', fontSize: 28, marginBottom: 10, color: 'white'},
  description: {
    fontWeight: '300',
    fontSize: 12,
    marginBottom: 10,
    color: 'white',
  },
  headerItem: {
    flex: 0.7,
    justifyContent: 'center',
  },
  bottomItem: {
    flex: 0.3,
  },
});

export default OnboardScreen;
