import React, {useCallback} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

import styles from '../navigatePage/style.ts';

const LibrarySampleNavigation = ({navigation}) => {
  const navigateToSegmentedTab = useCallback(() => {
    navigation.navigate('SegmentedTab');
  }, [navigation]);

  const navigateToReactHookForm = useCallback(() => {
    navigation.navigate('ReactHookForm');
  }, [navigation]);

  const navigateToToDoListMongoDB = useCallback(() => {
    navigation.navigate('ToDoListMongoDB');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Library Sample Navigation</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSegmentedTab}>
          <Text style={styles.title}>Segmented Tab</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToReactHookForm}>
          <Text style={styles.title}>React Hook Form</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToToDoListMongoDB}>
          <Text style={styles.title}>To Do List MongoDB</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default LibrarySampleNavigation;
