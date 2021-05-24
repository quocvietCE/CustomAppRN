import React from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';
import {fonts, width, SPACING} from '../config/theme';

export default function PhotographyDetails({data, scrollX, style}) {
  return (
    <View style={style}>
      {data.map((item, index) => {
        const inputRange = [
          (index - 0.5) * width,
          index * width,
          (index + 0.5) * width,
        ];
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [10, 0, 10],
        });
        return (
          <Animated.View
            key={`detail.${item.key}`}
            style={{
              transform: [{translateY}],
              opacity,
              position: 'absolute',
            }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: SPACING,
  },
  description: {
    color: '#fff',
    // ...fonts.montserratRegular,
    fontSize: 16,
  },
});
