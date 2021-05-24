// Inspiration: https://dribbble.com/shots/7378780-Travel-App-Trip-Detail-Animation

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
} from 'react-native';
import data from '../../config/data/locations';

import {SharedElement} from 'react-navigation-shared-element';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoBack from '../../components/GoBack';
const {width, height} = Dimensions.get('screen');

export const ITEM_WIDTH = width * 0.68;
export const SPACING = 20;

export default function TravelList({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView>
      <StatusBar hidden />
      <GoBack />
      <Text
        style={{
          fontWeight: '900',
          margin: 20,
          textTransform: 'uppercase',
          fontSize: 18,
          marginBottom: 0,
        }}>
        Trips
      </Text>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        snapToInterval={ITEM_WIDTH + SPACING * 2}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingRight: width - (ITEM_WIDTH + SPACING * 2),
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
        renderItem={({item, index}) => {
          const s = ITEM_WIDTH + SPACING * 2;
          const inputRange = [(index - 1) * s, index * s, (index + 1) * s];
          console.log('item: ', item);
          const imageScale = scrollX.interpolate({
            inputRange,
            outputRange: [1, 1.1, 1],
            extrapolate: 'clamp',
          });
          const headingTranslateX = scrollX.interpolate({
            inputRange,
            outputRange: [width, 0, -width],
            extrapolate: 'clamp',
          });
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                width: ITEM_WIDTH,
                height: ITEM_WIDTH * 1.5,
                margin: SPACING,
                borderRadius: 18,
                overflow: 'hidden',
              }}
              onPress={() => navigation.push('TravelListDetail', {item})}>
              <SharedElement
                id={`item.${item.key}.photo`}
                style={[StyleSheet.absoluteFillObject]}>
                <Animated.Image
                  source={{uri: item.image}}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_WIDTH * 1.5,
                    borderRadius: 18,
                    resizeMode: 'cover',
                  }}
                />
              </SharedElement>
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {padding: 18, justifyContent: 'space-between'},
                ]}>
                <SharedElement
                  id={`item.${item.key}.location`}
                  style={{width: ITEM_WIDTH - SPACING * 2}}>
                  <Animated.Text
                    style={{
                      fontSize: 32,
                      color: 'white',
                      fontWeight: '800',
                      letterSpacing: -1,
                      textTransform: 'uppercase',
                      transform: [{translateX: headingTranslateX}],
                    }}>
                    {item.location}
                  </Animated.Text>
                </SharedElement>
                <View>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgb(255,134,151)',
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        lineHeight: 18,
                        color: 'white',
                        fontWeight: '800',
                      }}>
                      {item.numberOfDays}
                    </Text>
                    <Text style={{fontSize: 9, color: 'white'}}>days</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}
