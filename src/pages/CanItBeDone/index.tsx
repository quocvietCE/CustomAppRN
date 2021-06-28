import React, {useCallback} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

import styles from '../navigatePage/style.ts';

const CanItBeDoneNavigation = ({navigation}) => {
  const navigateToSeason4 = useCallback(() => {
    navigation.navigate('Season4');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Can It Be Done Navigation</Text>
        <Pressable style={styles.btnNavigation} onPress={navigateToSeason4}>
          <Text style={styles.title}>Season 4</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default CanItBeDoneNavigation;
