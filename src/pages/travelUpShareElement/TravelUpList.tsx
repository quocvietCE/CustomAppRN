import * as React from 'react';
import {
  StatusBar,
  Dimensions,
  Animated,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Easing,
} from 'react-native';
import {
  FlatList,
  FlingGestureHandler,
  Directions,
  State,
} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {SPACING, width} from '../../config/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoBack from '../../components/GoBack';

const dataNew = [
  {
    key: '1',
    image:
      'https://images.unsplash.com/photo-1571983823232-c22a48846402?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&w=600&q=80',
    name: 'Everest',
  },
  {
    key: '2',
    image:
      'https://images.unsplash.com/photo-1539013646821-b8c1e125b390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Fuji',
  },
  {
    key: '3',
    image:
      'https://images.unsplash.com/photo-1491331606314-1d15535360fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Kilimanjaro',
  },
  {
    key: '4',
    image:
      'https://images.unsplash.com/photo-1539655442433-f7d7d867884f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'K2',
  },
  {
    key: '5',
    image:
      'https://images.unsplash.com/photo-1469521669194-babb45599def?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=600&q=80',
    name: 'Denali',
  },
];

const IMAGE_WIDTH = width * 0.86;
const IMAGE_HEIGHT = IMAGE_WIDTH * 1.5;
const VISIBLE_ITEMS = 4;

export default function TravelUpList({navigation}) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const activeIndex = React.useRef(new Animated.Value(0)).current;
  const animatedIndex = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    console.log('animatedIndex');
    Animated.timing(animatedIndex, {
      toValue: activeIndex,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  });

  const setActiveIndex = React.useCallback((newIndex) => {
    console.log('setActiveIndex :', newIndex);
    setSelectedIndex(newIndex);
    activeIndex.setValue(newIndex);
  }, []);

  const Indicator = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 100,
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          width,
        }}>
        {dataNew.map((_, i) => {
          const inputRange = [i - 0.1, i, i + 1];

          const scale = animatedIndex.interpolate({
            inputRange,
            outputRange: [0.8, 1.4, 0.8],
            extrapolate: 'clamp',
          });
          const opacity = animatedIndex.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.6],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`indicator-${i}`}
              style={{
                height: 10,
                width: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                opacity,
                margin: 6,
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

  return (
    <FlingGestureHandler
      key="down"
      direction={Directions.DOWN}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (selectedIndex === dataNew.length - 1) {
            return;
          }
          setActiveIndex(selectedIndex + 1);
        }
      }}>
      <FlingGestureHandler
        key="up"
        direction={Directions.UP}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (selectedIndex === 0) {
              return;
            }
            setActiveIndex(selectedIndex - 1);
          }
        }}>
        <SafeAreaView style={{flex: 1, backgroundColor: '#1E1D1D'}}>
          <GoBack />
          <StatusBar hidden />
          <FlatList
            data={dataNew}
            keyExtractor={(item) => item.key}
            scrollEnabled={false}
            removeClippedSubviews={false}
            // horizontal
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
              console.log('data', dataNew);
              const newStyle = [
                style,
                {
                  zIndex: dataNew.length - index,
                  left: -IMAGE_WIDTH / 2,
                  top: -IMAGE_HEIGHT / 2,
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
              console.log('Item', item);
              console.log('Index items', index);
              // console.log('TravelUpList renderItem item: ', item);
              const inputRange = [index - 1, index, index + 1];
              const translateY = animatedIndex.interpolate({
                inputRange,
                outputRange: [-30, 0, 30],
              });
              const scale = animatedIndex.interpolate({
                inputRange,
                outputRange: [0.92, 1, 1.1],
              });
              const opacity = animatedIndex.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });
              return (
                <Animated.View
                  style={{
                    opacity,
                    position: 'absolute',
                    transform: [{translateY}, {scale}],
                  }}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                      setTimeout(() => {
                        console.log('Index..2', index);
                      }, 100);
                      console.log('Index..', index);
                      console.log('TravelUpList item: ', item);
                      navigation.navigate('TravelUpDetails', {
                        item: dataNew[selectedIndex],
                      });
                    }}>
                    <SharedElement
                      id={`item.${item.key}.photo`}
                      style={styles.image}>
                      <Image source={{uri: item.image}} style={styles.image} />
                    </SharedElement>
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        padding: SPACING * 2,
                      }}>
                      <SharedElement id={`item.${item.key}.name`}>
                        <Text
                          style={styles.name}
                          adjustsFontSizeToFit={true}
                          numberOfLines={1}>
                          {item.name}
                        </Text>
                      </SharedElement>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              );
            }}
          />
          <Indicator />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
}

const styles = StyleSheet.create({
  image: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
    borderRadius: 16,
  },
  name: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 38,
    fontWeight: '900',
  },
});
