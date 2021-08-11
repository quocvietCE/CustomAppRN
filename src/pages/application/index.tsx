import React, {useCallback} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

import styles from '../navigatePage/style.ts';

const ApplicationNavigation = ({navigation}) => {
  const navigateToBankingApp = useCallback(() => {
    navigation.navigate('BankingApp');
  }, [navigation]);

  const navigateToChatFireBaseApp = useCallback(() => {
    navigation.navigate('ChatFireBaseApp');
  }, [navigation]);

  const navigateToAirBnBCloneV1 = useCallback(() => {
    navigation.navigate('AirBnBCloneV1');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Application List</Text>
        <Pressable style={styles.btnNavigation} onPress={navigateToBankingApp}>
          <Text style={styles.title}>Banking App</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToChatFireBaseApp}>
          <Text style={styles.title}>Chat FireBase App</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAirBnBCloneV1}>
          <Text style={styles.title}>Air BnB Clone V1</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ApplicationNavigation;
