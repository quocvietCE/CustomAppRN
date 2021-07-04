import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SwipeButton from './SwipeButton';

const ChartAnimatedVersion2 = () => {
  const onToggle = useCallback(() => {
    // callback
  }, []);
  return (
    <View style={styles.container}>
      <Text>ChartAnimatedVersion2</Text>

      <View style={styles.seg}>
        <SwipeButton onToggle={onToggle} />
      </View>

      <View style={styles.seg} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  seg: {
    marginBottom: 50,
  },
});

export default ChartAnimatedVersion2;
