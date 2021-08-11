import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TripsContainer = () => {
  return (
    <View style={styles.container}>
      <Text>TripsContainer</Text>
    </View>
  );
};
export default TripsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
