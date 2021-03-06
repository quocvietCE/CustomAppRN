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
  TouchableOpacity,
  Easing,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import GoBack from '../../components/GoBack';
// import {SharedElement} from 'react-native-shared-element';
import {SharedElement} from 'react-navigation-shared-element';

import {
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
// import events from '../../config/data/events';

EvilIcons.loadFont();

// https://www.creative-flyers.com
const DATA = [
  {
    key: '1',
    title: 'Afro vibes',
    location: 'Mumbai, India',
    date: 'Nov 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Afro-vibes-flyer-template.jpg',
  },
  {
    key: '2',
    title: 'Jungle Party',
    location: 'Unknown',
    date: 'Sept 3rd, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2019/11/Jungle-Party-Flyer-Template-1.jpg',
  },
  {
    key: '3',
    title: '4th Of July',
    location: 'New York, USA',
    date: 'Oct 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/4th-Of-July-Invitation.jpg',
  },
  {
    key: '4',
    title: 'Summer festival',
    location: 'Bucharest, Romania',
    date: 'Aug 17th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/07/Summer-Music-Festival-Poster.jpg',
  },
  {
    key: '5',
    title: 'BBQ with friends',
    location: 'Prague, Czech Republic',
    date: 'Sept 11th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/BBQ-Flyer-Psd-Template.jpg',
  },
  {
    key: '6',
    title: 'Festival music',
    location: 'Berlin, Germany',
    date: 'Apr 21th, 2021',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Festival-Music-PSD-Template.jpg',
  },
  {
    key: '7',
    title: 'Beach House',
    location: 'Liboa, Portugal',
    date: 'Aug 12th, 2020',
    poster:
      'https://www.creative-flyers.com/wp-content/uploads/2020/06/Summer-Beach-House-Flyer.jpg',
  },
];

const OVERFLOW_HEIGHT = 70;
export const SPACING = 10;
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
        {DATA.map((item, index) => {
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

export default function EventList({navigation}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  });

  const setActiveIndex = React.useCallback((newIndex) => {
    setSelectedIndex(newIndex);
    scrollXIndex.setValue(newIndex);
  }, []);

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (selectedIndex === DATA.length - 1) {
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
          <OverflowItems data={DATA} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={DATA}
            keyExtractor={(item) => item.key}
            horizontal
            scrollEnabled={false}
            removeClippedSubviews={false}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
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
                  zIndex: DATA.length - index,
                  left: -ITEM_WIDTH / 2,
                  top: -ITEM_HEIGHT / 2,
                },
              ];
              // console.log('newStyle: ', newStyle);
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
                    opacity,
                    position: 'absolute',
                    transform: [{translateX}, {scale}],
                  }}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                      console.log('Index', index);
                      console.log('EventList item: ', item);
                      navigation.navigate('EventCardDetail', {
                        item,
                      });
                    }}>
                    <SharedElement
                      id={`item.${item.key}.fuck`}
                      style={styles.image}>
                      <Image source={{uri: item.poster}} style={styles.image} />
                    </SharedElement>
                  </TouchableOpacity>
                </Animated.View>
              );
            }}
          />
          {/* <SharedElement
            id="general.bg"
            style={[
              StyleSheet.absoluteFillObject,
              {
                transform: [{translateY: height}],
              },
            ]}>
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor: '#fff',
                  transform: [{translateY: 0}],
                },
              ]}
            />
          </SharedElement> */}
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
    fontWeight: '900',
    textTransform: 'uppercase',
    // letterSpacing: -1,
  },
  location: {
    fontSize: 14,
  },
  date: {
    fontSize: 12,
  },
  itemContainer: {
    height: OVERFLOW_HEIGHT,
    padding: SPACING * 2,
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
    // backgroundColor: 'red',
    // flex: 1,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 14,
    resizeMode: 'cover',
  },
});
