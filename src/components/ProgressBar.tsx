import React from 'react';
import {View, Text, Animated} from 'react-native';
// import Animated from 'react-native-reanimated';
// import {interpolate, multiply} from 'react-native-reanimated';
// import {Svg, Circle} from 'react-native-svg';

const ProgressBar = ({step, steps, height}) => {
  const animatedValue = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  React.useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text style={{fontSize: 12, fontWeight: '900', margin: 5}}>
        ${step}/{steps}
      </Text>
      <View
        onLayout={(e) => {
          const newWidth = e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={{
          height,
          backgroundColor: 'rgba(0,0,222,0.1)',
          borderRadius: height,
          overflow: 'hidden',
        }}>
        <Animated.View
          style={{
            height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            borderRadius: height,
            width: '100%',
            left: 0,
            top: 0,
            transform: [
              {
                translateX: animatedValue,
              },
            ],
          }}
        />
      </View>
    </>
  );
};

export default ProgressBar;
// <View
//       style={{
//         height: height,
//         backgroundColor: 'rgba(0,0,0,0.1)',
//         borderRadius: height,
//       }}>
//       <View
//         style={{
//           height: height,
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           borderRadius: height,
//           width: '100%',
//           left: 0,
//           top: 0,
//         }}
//       />
//     </View>
