import React, {useCallback} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

import styles from '../navigatePage/style.ts';

const ChartListNavigation = ({navigation}) => {
  const navigateToChartCircle = useCallback(() => {
    navigation.navigate('ChartCircle');
  }, [navigation]);

  const navigateToChartCustom = useCallback(() => {
    navigation.navigate('ChartCustom');
  }, [navigation]);

  const navigateToChartDemo = useCallback(() => {
    navigation.navigate('ChartDemo');
  }, [navigation]);

  const navigateToCharCustom1 = useCallback(() => {
    navigation.navigate('ChartCustom1');
  }, [navigation]);

  const navigateToCharVictory = useCallback(() => {
    navigation.navigate('ChartVictory');
  }, [navigation]);

  const navigateToAnimatedV2 = useCallback(() => {
    navigation.navigate('ChartAnimatedVersion2');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Chart List Navigation</Text>
        <Pressable style={styles.btnNavigation} onPress={navigateToChartCircle}>
          <Text style={styles.title}>Chart Circle</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToChartCustom}>
          <Text style={styles.title}>Chart Custom</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToChartDemo}>
          <Text style={styles.title}>Chart Demo</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToCharCustom1}>
          <Text style={styles.title}>Chart Custom 1</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToCharVictory}>
          <Text style={styles.title}>Chart Victory</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToAnimatedV2}>
          <Text style={styles.title}>Chart With Animated v2 *</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ChartListNavigation;
