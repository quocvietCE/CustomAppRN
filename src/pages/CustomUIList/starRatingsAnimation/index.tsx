import React from 'react';
import {View, StyleSheet} from 'react-native';
import Rating from './Rating';

export default function App() {
  return (
    <View style={styles.container}>
      <Rating rating={4} numStars={5} starColor={'red'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
