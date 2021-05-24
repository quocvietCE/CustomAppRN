import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';

import Columns from './Column';
import XAxis from './XAxis';
import YAxis from './YAxis';

export default function BarGraph({data, color}) {
  let width = Dimensions.get('screen').width;
  let yAxisHeight = 325;
  let xAxisHeight = 30;
  let barsHeight = 315;

  return (
    <View style={styles.main}>
      <YAxis height={yAxisHeight} width={width} />

      <Columns
        data={data}
        width={width - 10}
        height={barsHeight}
        color={'#fff'}
      />

      <XAxis width={width - 10} height={xAxisHeight} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 25,
    marginHorizontal: 0,
  },
});
