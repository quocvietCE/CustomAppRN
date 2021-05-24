// import React, {useRef} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   Animated,
//   Dimensions,
//   TouchableOpacity,
// } from 'react-native';
// import {SharedElement} from 'react-navigation-shared-element';
// import styles, {DOT_SIZE} from './style';

// import data from '../../mockData/dataHeadphoneCarousel';
// import GoBack from '../../components/GoBack';
// const {width, height} = Dimensions.get('window');

// const Pagination = ({scrollX}) => {
//   const inputRange = [-width, 0, width];
//   const translateX = scrollX.interpolate({
//     inputRange,
//     outputRange: [-DOT_SIZE, 0, DOT_SIZE],
//   });
//   return (
//     <View style={[styles.pagination]}>
//       <Animated.View
//         style={[styles.paginationIndicator, {transform: [{translateX}]}]}
//       />
//       {data.map((item) => {
//         return (
//           <View key={item.key} style={styles.paginationDotContainer}>
//             <View
//               style={[styles.paginationDot, {backgroundColor: item.dotBg}]}
//             />
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// const Ticker = ({scrollX}) => {
//   const inputRange = [-width, 0, width];
//   const translateY = scrollX.interpolate({
//     inputRange,
//     outputRange: [40, 0, -40],
//   });
//   return (
//     <View style={[styles.tickerContainer]}>
//       <Animated.View style={{transform: [{translateY}]}}>
//         {data.map((item, index) => {
//           return (
//             <Text key={index} style={styles.ticker}>
//               {item.type}
//             </Text>
//           );
//         })}
//       </Animated.View>
//     </View>
//   );
// };

// const Circle = ({scrollX}) => {
//   return (
//     <View
//       style={[
//         StyleSheet.absoluteFillObject,
//         styles.circleContainer,
//         // {borderWidth: 1},
//       ]}>
//       {data.map(({dotBg, key}, index) => {
//         const inputRange = [
//           (index - 0.55) * width,
//           index * width,
//           (index + 0.55) * width,
//         ];
//         const scale = scrollX.interpolate({
//           inputRange,
//           outputRange: [0, 1, 0],
//           extrapolate: 'clamp',
//         });
//         const opacity = scrollX.interpolate({
//           inputRange,
//           outputRange: [0, 0.2, 0],
//         });
//         console.log(`item.${key}.circle`);
//         return (
//           <SharedElement
//             key={index}
//             id={`item.${key}.circle`}
//             style={styles.circle}>
//             <Animated.View
//               style={[
//                 styles.circle,
//                 {
//                   top: 0,
//                   backgroundColor: dotBg,
//                   opacity,
//                   transform: [{scale}],
//                 },
//               ]}
//             />
//           </SharedElement>
//         );
//       })}
//     </View>
//   );
// };

// const Item = ({
//   imageUri,
//   heading,
//   description,
//   index,
//   scrollX,
//   navigation,
//   item,
// }) => {
//   const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
//   // console.log('inputRange: ', inputRange);
//   const inputRangeOpacity = [
//     (index - 0.3) * width,
//     index * width,
//     (index + 0.3) * width,
//   ];
//   const scale = scrollX.interpolate({
//     inputRange,
//     outputRange: [0.2, 1, 0.2],
//   });
//   // console.log('scale: ', scale);

//   const translateXHeading = scrollX.interpolate({
//     inputRange,
//     outputRange: [width * 0.2, 0, -width * 0.2],
//   });
//   const translateXDescription = scrollX.interpolate({
//     inputRange,
//     outputRange: [width * 0.6, 0, -width * 0.6],
//   });

//   const opacity = scrollX.interpolate({
//     inputRange: inputRangeOpacity,
//     outputRange: [0, 1, 0],
//   });

//   console.log(`item.${item.key}.photo`);

//   return (
//     <TouchableOpacity
//       style={styles.itemStyle}
//       activeOpacity={0.8}
//       onPress={() => navigation.navigate('UrbanEarsDetails', {item})}>
//       <SharedElement id={`item.${item.key}.photo`} style={{flex: 1}}>
//         <Animated.Image
//           style={[styles.imageStyle, {transform: [{scale}]}]}
//           source={imageUri}
//         />
//       </SharedElement>

//       <View style={styles.textContainer}>
//         <Animated.Text
//           style={[
//             styles.heading,
//             {opacity, transform: [{translateX: translateXHeading}]},
//           ]}>
//           {heading}
//         </Animated.Text>
//         <Animated.Text
//           style={[
//             styles.description,
//             {opacity, transform: [{translateX: translateXDescription}]},
//           ]}>
//           {description}
//         </Animated.Text>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const HeadphoneCarousel = ({navigation}) => {
//   const _scrollX = useRef(new Animated.Value(0)).current;
//   return (
//     <View
//       style={[
//         styles.container,
//         // {justifyContent: 'center', alignItems: 'center'},
//       ]}>
//       <GoBack />
//       <Circle scrollX={_scrollX} />
//       <Image
//         style={[styles.logo]}
//         // source={{require = '../../assets/headphonesCarousel/ue_black_logo.png'}}
//         source={require('../../assets/headphonesCarousel/ue_black_logo.png')}
//       />
//       <Animated.FlatList
//         data={data}
//         keyExtractor={(item) => item.key}
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         horizontal
//         renderItem={({item, index}) => (
//           <Item
//             {...item}
//             index={index}
//             scrollX={_scrollX}
//             navigation={navigation}
//             item={item}
//           />
//         )}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset: {x: _scrollX}}}],
//           {useNativeDriver: true},
//         )}
//         scrollEventThrottle={16}
//       />
//       <Pagination scrollX={_scrollX} />
//       <Ticker scrollX={_scrollX} />
//     </View>
//   );
// };

// export default HeadphoneCarousel;

/*
Inspiration: https://dribbble.com/shots/3894781-Urbanears-Headphones
Twitter: http://twitter.com/mironcatalin
GitHub: http://github.com/catalinmiron
Video Tutorial: https://youtu.be/cGTD4yYgEHc
*/

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import data from '../../config/data/urbanears';
import {SharedElement} from 'react-navigation-shared-element';
import GoBack from '../../components/GoBack';

const {width, height} = Dimensions.get('window');
const LOGO_WIDTH = 220;
const LOGO_HEIGHT = 40;
const DOT_SIZE = 40;
const TICKER_HEIGHT = 40;
const CIRCLE_SIZE = width * 0.6;

const Circle = ({scrollX}) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.circleContainer]}>
      {data.map(({color}, index) => {
        const inputRange = [
          (index - 0.55) * width,
          index * width,
          (index + 0.55) * width,
        ];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
        });
        return (
          <SharedElement
            key={index}
            id={`item.${data[index].key}.circle`}
            style={styles.circle}>
            <Animated.View
              style={[
                styles.circle,
                {
                  top: 0,
                  backgroundColor: color,
                  opacity,
                  transform: [{scale}],
                },
              ]}
            />
          </SharedElement>
        );
      })}
    </View>
  );
};

const Ticker = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [TICKER_HEIGHT, 0, -TICKER_HEIGHT],
  });
  return (
    <View style={styles.tickerContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map(({type}, index) => {
          return (
            <Text key={index} style={styles.tickerText}>
              {type}
            </Text>
          );
        })}
      </Animated.View>
    </View>
  );
};

const Item = ({item, index, scrollX, navigation}) => {
  const {imageUri, heading, description} = item;
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateXHeading = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.1, 0, -width * 0.1],
  });
  const translateXDescription = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });
  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemStyle}
      onPress={() => {
        navigation.navigate('UrbanEarsDetails', {item});
      }}>
      <SharedElement id={`item.${item.key}.photo1`} style={{flex: 1}}>
        <Animated.Image
          source={imageUri}
          style={[
            styles.imageStyle,
            {
              transform: [{scale}],
            },
          ]}
        />
      </SharedElement>
      <View style={styles.textContainer}>
        <Animated.Text
          style={[
            styles.heading,
            {
              opacity,
              transform: [{translateX: translateXHeading}],
            },
          ]}>
          {heading}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.description,
            {
              opacity,
              transform: [
                {
                  translateX: translateXDescription,
                },
              ],
            },
          ]}>
          {description}
        </Animated.Text>
      </View>
    </TouchableOpacity>
  );
};

const Pagination = ({scrollX}) => {
  const inputRange = [-width, 0, width];
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: 'absolute',
            // backgroundColor: 'red',
            transform: [{translateX}],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View
              style={[styles.paginationDot, {backgroundColor: item.color}]}
            />
          </View>
        );
      })}
    </View>
  );
};

export default function UrbanEarsList({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <GoBack />
      <StatusBar hidden />
      <Circle scrollX={scrollX} />
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({item, index}) => (
          <Item
            item={item}
            index={index}
            scrollX={scrollX}
            navigation={navigation}
          />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}
      />
      <Image
        style={styles.logo}
        source={require('../../assets/headphonesCarousel/ue_black_logo.png')}
      />
      <Pagination scrollX={scrollX} />
      <Ticker scrollX={scrollX} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    width: width * 0.75,
    height: width * 0.75,
    resizeMode: 'contain',
    flex: 1,
  },
  textContainer: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    flex: 0.5,
  },
  heading: {
    color: '#444',
    textTransform: 'uppercase',
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 2,
    marginBottom: 5,
  },
  description: {
    color: '#ccc',
    fontWeight: '600',
    textAlign: 'left',
    width: width * 0.75,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 16 * 1.5,
  },
  logo: {
    opacity: 0.9,
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    left: 10,
    bottom: 10,
    transform: [
      {translateX: -LOGO_WIDTH / 2},
      {translateY: -LOGO_HEIGHT / 2},
      {rotateZ: '-90deg'},
      {translateX: LOGO_WIDTH / 2},
      {translateY: LOGO_HEIGHT / 2},
    ],
  },
  pagination: {
    position: 'absolute',
    right: 20,
    bottom: 40,
    flexDirection: 'row',
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  tickerContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
    overflow: 'hidden',
    height: TICKER_HEIGHT,
  },
  tickerText: {
    fontSize: TICKER_HEIGHT,
    lineHeight: TICKER_HEIGHT,
    textTransform: 'uppercase',
    fontWeight: '800',
  },

  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    position: 'absolute',
    top: '15%',
  },
});
