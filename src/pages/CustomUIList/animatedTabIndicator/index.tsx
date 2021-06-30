import React from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles, {width, height} from './style';
import Data from './data';

// https://www.youtube.com/watch?v=ZiSN9uik6OY

const Tab = React.forwardRef(({item, onItemPress}, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text
          style={{
            color: 'white',
            textTransform: 'uppercase',
            fontSize: 84 / Data.length,
            fontWeight: '800',
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const Indicator = ({measures, scrollX}) => {
  const inputRange = Data.map((_, i) => i * width);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.width),
  });

  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map((measure) => measure.x),
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 4,
        width: indicatorWidth,
        left: 0,
        backgroundColor: 'white',
        bottom: -10,
        transform: [
          {
            translateX: translateX,
          },
        ],
      }}
    />
  );
};

const Tabs = ({data, scrollX, onItemPress}) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    let m = [];
    data.forEach((item) => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          console.log(x, y, width, height);
          m.push({x, y, width, height});
          if (m.length === data.length) {
            setMeasures(m);
          }
        },
      );
    });
  });

  return (
    <View
      style={{
        position: 'absolute',
        top: 100,
        width,
        // backgroundColor: 'red',
        // flex: 1,
      }}>
      <View
        ref={containerRef}
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-evenly',
          // backgroundColor: 'blue',
        }}>
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => onItemPress(index)}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

const AnimatedTabIndicator = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const ref = React.useRef();
  const onItemPress = React.useCallback((itemIndex) => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * width,
    });
  });
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={Data}
        horizontal
        pagingEnabled
        keyExtractor={(item) => item.key}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => {
          return (
            <View style={{width, height}}>
              <Image
                source={{uri: item.image}}
                style={{flex: 1}}
                resizeMode="cover"
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {backgroundColor: 'rgba(0,0,0,0.3)'},
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs data={Data} scrollX={scrollX} onItemPress={onItemPress} />
    </View>
  );
};

export default AnimatedTabIndicator;
