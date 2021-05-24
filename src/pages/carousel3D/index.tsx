import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Animated,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
Icon.loadFont();

import styles, {IMAGE_WIDTH, IMAGE_HEIGHT, width, SPACING} from './style';
import Data from './data';

const Content = ({item}) => {
  return (
    <>
      <Text style={styles.title} numberOfLines={1} adjustsFontSizeToFit>
        {item.title}
      </Text>
      <Text style={styles.subtitle}>{item.price}</Text>
      <View style={{flexDirection: 'row', marginTop: SPACING}}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.currency}>USD</Text>
      </View>
    </>
  );
};

const Carousel3D = () => {
  const _scrollX = useRef(new Animated.Value(0)).current;
  const _progress = Animated.modulo(Animated.divide(_scrollX, width), width);
  const [index, setIndex] = useState(0);
  const ref = useRef();
  return (
    <View style={styles.container}>
      <SafeAreaView style={{marginTop: SPACING * 4}}>
        <View style={{height: IMAGE_HEIGHT * 2.1}}>
          <FlatList
            ref={ref}
            data={Data}
            keyExtractor={(item) => item.key}
            horizontal
            pagingEnabled
            bounces={false}
            style={{flexGrow: 0, zIndex: 999}}
            contentContainerStyle={{
              height: IMAGE_HEIGHT + SPACING * 2,
              paddingHorizontal: SPACING * 2,
            }}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: _scrollX}}}],
              {useNativeDriver: false},
            )}
            scrollEventThrottle={16}
            onMomentumScrollEnd={(ev) => {
              setIndex(Math.floor(ev.nativeEvent.contentOffset.x / width));
            }}
            renderItem={({item, index}) => {
              const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
              ];
              const opacity = _scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              const translateY = _scrollX.interpolate({
                inputRange,
                outputRange: [50, 1, 20],
              });
              return (
                <Animated.View
                  style={{
                    width,
                    paddingVertical: SPACING,
                    opacity,
                    transform: [{translateY}],
                  }}>
                  <Image source={{uri: item.image}} style={styles.imageCard} />
                </Animated.View>
              );
            }}
          />
          <View
            style={{
              width: IMAGE_WIDTH,
              alignItems: 'center',
              paddingHorizontal: SPACING * 2,
              marginLeft: SPACING * 2,
              // borderWidth: 1,
              zIndex: 999,
            }}>
            {Data.map((item, index) => {
              const inputRange = [
                (index - 0.2) * width,
                index * width,
                (index + 0.2) * width,
              ];
              const opacity = _scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              const rotateY = _scrollX.interpolate({
                inputRange,
                outputRange: ['45deg', '0deg', '45deg'],
              });
              return (
                <Animated.View
                  key={item.key}
                  style={{
                    position: 'absolute',
                    opacity,
                    transform: [
                      {perspective: IMAGE_WIDTH * 4},
                      {
                        rotateY,
                      },
                    ],
                  }}>
                  <Content item={Data[index]} />
                </Animated.View>
              );
            })}
          </View>
          <Animated.View
            style={[
              styles.whiteRectangle,
              {
                transform: [
                  {perspective: IMAGE_WIDTH * 4},
                  {
                    rotateY: _progress.interpolate({
                      inputRange: [0, 0.5, 1],
                      outputRange: ['0deg', '90deg', '180deg'],
                    }),
                  },
                ],
              },
            ]}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: IMAGE_WIDTH + SPACING * 4,
            paddingHorizontal: SPACING,
            paddingVertical: SPACING,
          }}>
          <TouchableOpacity
            disabled={index === 0}
            onPress={() => {
              ref?.current?.scrollToOffset({
                offset: (index - 1) * width,
                animated: true,
              });
            }}
            style={{opacity: index === 0 ? 0.2 : 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="swapleft" size={42} color="black" />
              <Text style={{fontSize: 12, fontWeight: '800'}}>PREV</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            disabled={index === Data.length - 1}
            onPress={() => {
              ref?.current?.scrollToOffset({
                offset: (index + 1) * width,
                animated: true,
              });
            }}
            style={{opacity: index === Data.length - 1 ? 0.2 : 1}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 12, fontWeight: '800'}}>NEXT</Text>
              <Icon name="swapright" size={42} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Carousel3D;
