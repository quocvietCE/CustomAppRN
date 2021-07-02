import React, {useCallback} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

import styles from '../../navigatePage/style.ts';

const Season4ListNavigation = ({navigation}) => {
  const navigateToLiquidSwipe = useCallback(() => {
    navigation.navigate('LiquidSwipe');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Season 4 List Navigation</Text>
        <Pressable style={styles.btnNavigation} onPress={navigateToLiquidSwipe}>
          <Text style={styles.title}>Liquid Swipe</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Season4ListNavigation;
