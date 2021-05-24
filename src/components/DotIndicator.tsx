import React from 'react';
import {View, Animated} from 'react-native';

const Indicator = ({scrollX, DATA, width}) => {
  console.log('scrollX: ', scrollX);
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        bottom: 100,
      }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 0.1) * width, i * width, (i + 1) * width];
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

export default Indicator;
