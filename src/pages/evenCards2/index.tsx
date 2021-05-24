/**
 *
 * Inspiration: https://dribbble.com/shots/3731362-Event-cards-iOS-interaction
 */

import * as React from 'react';
import {
  StatusBar,
  Image,
  FlatList,
  Dimensions,
  Animated,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Easing,
} from 'react-native';
const {width} = Dimensions.get('screen');
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  FlingGestureHandler,
  Directions,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import events from '../../config/data/events';
import {SharedElement} from 'react-navigation-shared-element';
import {height, fonts} from '../../config/theme';
import GoBack from '../../components/GoBack';

EvilIcons.loadFont();

const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.76;
const ITEM_HEIGHT = ITEM_WIDTH * 1.7;
const VISIBLE_ITEMS = 3;

const OverflowItems = ({data, scrollXAnimated}) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {events.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <Text style={[styles.title]} numberOfLines={1}>
                {item.title}
              </Text>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.location]}>
                  <EvilIcons
                    name="location"
                    size={16}
                    color="black"
                    style={{marginRight: 5}}
                  />
                  {item.location}
                </Text>
                <Text style={[styles.date]}>{item.date}</Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

export default function EventsList({navigation}) {
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    Animated.timing(scrollXAnimated, {
      toValue: scrollXIndex,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  });

  const setActiveIndex = React.useCallback((activeIndex) => {
    setSelectedIndex(activeIndex);
    scrollXIndex.setValue(activeIndex);
  }, []);

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (selectedIndex === events.length - 1) {
            return;
          }
          setActiveIndex(selectedIndex + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (selectedIndex === 0) {
              return;
            }
            setActiveIndex(selectedIndex - 1);
          }
        }}>
        <SafeAreaView style={styles.container}>
          <GoBack />
          <StatusBar hidden />
          <OverflowItems data={events} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={events}
            keyExtractor={(item) => item.key}
            horizontal
            scrollEnabled={false}
            removeClippedSubviews={false}
            contentContainerStyle={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            CellRendererComponent={({
              item,
              index,
              children,
              style,
              ...props
            }) => {
              const newStyle = [
                style,
                {
                  zIndex: events.length - index,
                  left: -ITEM_WIDTH / 2,
                  top: -ITEM_HEIGHT / 2,
                },
              ];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({item, index}) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -200],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 0.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <Animated.View
                  style={{
                    position: 'absolute',
                    opacity,
                    transform: [
                      {
                        translateX,
                      },
                      {scale},
                    ],
                  }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() =>
                      navigation.navigate('CardDetail2', {
                        item: events[selectedIndex],
                      })
                    }>
                    <SharedElement
                      id={`item.${item.key}.photo`}
                      style={styles.image}>
                      <Image source={{uri: item.poster}} style={styles.image} />
                    </SharedElement>
                  </TouchableOpacity>
                </Animated.View>
              );
            }}
          />
          <SharedElement
            id="general.bg"
            style={[
              StyleSheet.absoluteFillObject,
              {transform: [{translateY: height}]},
            ]}>
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor: 'white',
                  transform: [{translateY: 0}],
                },
              ]}
            />
          </SharedElement>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  location: {
    // ...fonts.montserratRegular,
    fontSize: 14,
  },
  date: {
    fontSize: 12,
    // ...fonts.montserratRegular,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING,
    paddingHorizontal: SPACING * 2,
  },
  itemContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  overflowContainer: {
    height: OVERFLOW_HEIGHT,
    overflow: 'hidden',
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 14,
    resizeMode: 'cover',
  },
});
