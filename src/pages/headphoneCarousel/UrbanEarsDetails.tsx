// // image pattern from https://www.rawpixel.com/image/2053372/doodle-patterned-banner

// import * as React from 'react';
// import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
// import {SharedElement} from 'react-navigation-shared-element';
// import {width, fonts, SPACING, height} from '../../config/theme';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import * as Animatable from 'react-native-animatable';

// AntDesign.loadFont();

// const animation = {
//   0: {
//     translateX: width,
//   },
//   1: {
//     translateX: 0,
//   },
// };
// const letterAnimation = {
//   0: {
//     opacity: 0,
//     translateY: -42,
//   },
//   1: {
//     opacity: 1,
//     translateY: 0,
//   },
// };

// const DURATION = 300;

// const UrbanEarsDetails = ({navigation, route}) => {
//   const {item} = route.params;
//   console.log('item: ', item);
//   console.log(`item.${item.key}.photo`);

//   // circle should fill entire screen
//   const circleRadius =
//     Math.sqrt(Math.pow(height / 2, 2) + Math.pow(width / 2, 2)) * 2;

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <AntDesign
//         name="close"
//         size={28}
//         style={{
//           padding: 12,
//           position: 'absolute',
//           top: SPACING * 2,
//           right: 0,
//           zIndex: 2,
//         }}
//         color={'#333'}
//         onPress={() => {
//           // animation(0).start()
//           navigation.goBack();
//         }}
//       />
//       <SharedElement
//         id={`item.${item.key}.circle`}
//         style={[
//           StyleSheet.absoluteFillObject,
//           {alignItems: 'center', justifyContent: 'center'},
//         ]}>
//         <View
//           style={{
//             borderRadius: circleRadius,
//             width: circleRadius,
//             height: circleRadius,
//             opacity: 0.2,
//             backgroundColor: item.dotBg,
//             overflow: 'hidden',
//           }}
//         />
//       </SharedElement>
//       <SharedElement id={`item.${item.key}.photo`}>
//         <Image source={item.imageUri} style={[styles.imageStyle]} />
//       </SharedElement>
//       <View style={{position: 'absolute', top: SPACING * 3, left: SPACING}}>
//         <View style={{flexDirection: 'row', overflow: 'hidden'}}>
//           {item.type.split('').map((letter, index) => {
//             return (
//               <Animatable.Text
//                 delay={DURATION + index * 50}
//                 animation={letterAnimation}
//                 style={styles.letter}
//                 key={index}>
//                 {letter}
//               </Animatable.Text>
//             );
//           })}
//         </View>
//         <View style={{overflow: 'hidden'}}>
//           <Animatable.Text
//             delay={DURATION + item.type.split('').length * 50 + 50}
//             animation={letterAnimation}
//             style={[
//               styles.letter,
//               {color: item.dotBg, fontSize: 18, lineHeight: 18},
//             ]}>
//             {item.colorName}
//           </Animatable.Text>
//         </View>
//       </View>
//       <View
//         style={{
//           flex: 1,
//           padding: SPACING,
//           flexDirection: 'row',
//           // borderWidth: 1,
//         }}>
//         <View style={{flex: 0.35, overflow: 'hidden'}}>
//           <Animatable.View
//             useNativeDriver
//             animation={animation}
//             delay={DURATION}
//             style={{
//               flex: 1,
//               backgroundColor: 'white',
//               justifyContent: 'space-between',
//               padding: SPACING,
//               overflow: 'hidden',
//             }}>
//             <Animatable.View
//               useNativeDriver
//               animation={animation}
//               delay={DURATION + 100}>
//               <Text
//                 style={styles.heading}
//                 numberOfLines={1}
//                 adjustsFontSizeToFit>
//                 Advertising
//               </Text>
//               <Text
//                 style={styles.heading}
//                 numberOfLines={1}
//                 adjustsFontSizeToFit>
//                 marketing
//               </Text>
//             </Animatable.View>
//             <Animatable.View
//               useNativeDriver
//               animation={animation}
//               delay={DURATION + 200}
//               style={{
//                 alignSelf: 'flex-end',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//               }}>
//               <Text
//                 style={[
//                   styles.heading,
//                   {fontSize: 11, marginRight: SPACING / 2},
//                 ]}>
//                 Play Video
//               </Text>
//               <AntDesign name="playcircleo" size={18} color="black" />
//             </Animatable.View>
//           </Animatable.View>
//         </View>
//         <View style={{flex: 0.65, overflow: 'hidden'}}>
//           <Animatable.Image
//             source={{
//               uri:
//                 'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v835-katie-20.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=21f0ddd9769e75e28dc3760a4fb3fbc4',
//             }}
//             useNativeDriver
//             animation={animation}
//             delay={700}
//             style={{flex: 1, resizeMode: 'cover'}}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// UrbanEarsDetails.sharedElements = (route, otherRoute, showing) => {
//   const {item} = route.params;
//   // console.log(`item.${item.key}.photo2`);
//   // console.log(`item.${item.key}.circle2`);
//   return [
//     {
//       id: `item.${item.key}.photo`,
//     },
//     {
//       id: `item.${item.key}.circle`,
//     },
//   ];
// };

// const styles = StyleSheet.create({
//   imageStyle: {
//     width: width * 0.9,
//     height: width * 0.9,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginTop: 90,
//   },
//   heading: {
//     // ...fonts.sourceSansProBold,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     fontSize: 16,
//   },
//   letter: {
//     fontSize: 32,
//     lineHeight: 32,
//     textTransform: 'uppercase',
//     fontWeight: '800',
//   },
// });

// export default UrbanEarsDetails;
// image pattern from https://www.rawpixel.com/image/2053372/doodle-patterned-banner

import * as React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {width, fonts, SPACING, height} from '../../config/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';

AntDesign.loadFont();

const animation = {
  0: {
    translateX: width,
  },
  1: {
    translateX: 0,
  },
};
const letterAnimation = {
  0: {
    opacity: 0,
    translateY: -42,
  },
  1: {
    opacity: 1,
    translateY: 0,
  },
};

const DURATION = 300;

const UrbanEarsDetails = ({navigation, route}) => {
  const {item} = route.params;

  // circle should fill entire screen
  const circleRadius =
    Math.sqrt(Math.pow(height / 2, 2) + Math.pow(width / 2, 2)) * 2;

  return (
    <SafeAreaView style={{flex: 1}}>
      <AntDesign
        name="close"
        size={28}
        style={{
          padding: 12,
          position: 'absolute',
          top: SPACING * 2,
          right: 0,
          zIndex: 2,
        }}
        color={'#333'}
        onPress={() => {
          // animation(0).start()
          navigation.goBack();
        }}
      />
      <SharedElement
        id={`item.${item.key}.circle`}
        style={[
          StyleSheet.absoluteFillObject,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <View
          style={{
            borderRadius: circleRadius,
            width: circleRadius,
            height: circleRadius,
            opacity: 0.2,
            backgroundColor: item.color,
            overflow: 'hidden',
          }}
        />
      </SharedElement>
      <SharedElement id={`item.${item.key}.photo1`}>
        <Image source={item.imageUri} style={styles.imageStyle} />
      </SharedElement>
      <View style={{position: 'absolute', top: SPACING * 3, left: SPACING}}>
        <View style={{flexDirection: 'row', overflow: 'hidden'}}>
          {item.type.split('').map((letter, index) => {
            return (
              <Animatable.Text
                delay={DURATION + index * 50}
                animation={letterAnimation}
                style={styles.letter}
                key={index}>
                {letter}
              </Animatable.Text>
            );
          })}
        </View>
        <View style={{overflow: 'hidden'}}>
          <Animatable.Text
            delay={DURATION + item.type.split('').length * 50 + 50}
            animation={letterAnimation}
            style={[
              styles.letter,
              {color: item.color, fontSize: 18, lineHeight: 18},
            ]}>
            {item.colorName}
          </Animatable.Text>
        </View>
      </View>
      <View style={{flex: 1, padding: SPACING, flexDirection: 'row'}}>
        <View style={{flex: 0.35, overflow: 'hidden'}}>
          <Animatable.View
            useNativeDriver
            animation={animation}
            delay={DURATION}
            style={{
              flex: 1,
              backgroundColor: 'white',
              justifyContent: 'space-between',
              padding: SPACING,
              overflow: 'hidden',
            }}>
            <Animatable.View
              useNativeDriver
              animation={animation}
              delay={DURATION + 100}>
              <Text
                style={styles.heading}
                numberOfLines={1}
                adjustsFontSizeToFit>
                Advertising
              </Text>
              <Text
                style={styles.heading}
                numberOfLines={1}
                adjustsFontSizeToFit>
                marketing
              </Text>
            </Animatable.View>
            <Animatable.View
              useNativeDriver
              animation={animation}
              delay={DURATION + 200}
              style={{
                alignSelf: 'flex-end',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[
                  styles.heading,
                  {fontSize: 11, marginRight: SPACING / 2},
                ]}>
                Play Video
              </Text>
              <AntDesign name="playcircleo" size={18} color="black" />
            </Animatable.View>
          </Animatable.View>
        </View>
        <View style={{flex: 0.65, overflow: 'hidden'}}>
          <Animatable.Image
            source={{
              uri:
                'https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v835-katie-20.jpg?w=1300&dpr=1&fit=default&crop=default&q=80&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=21f0ddd9769e75e28dc3760a4fb3fbc4',
            }}
            useNativeDriver
            animation={animation}
            delay={700}
            style={{flex: 1, resizeMode: 'cover'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

UrbanEarsDetails.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}.circle`,
    },
    {
      id: `item.${item.key}.photo1`,
    },
  ];
};

const styles = StyleSheet.create({
  imageStyle: {
    width: width * 0.9,
    height: width * 0.9,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 90,
  },
  heading: {
    // ...fonts.sourceSansProBold,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  letter: {
    fontSize: 32,
    lineHeight: 32,
    textTransform: 'uppercase',
    fontWeight: '800',
  },
});

export default UrbanEarsDetails;
