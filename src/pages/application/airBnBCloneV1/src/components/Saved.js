import React from 'react';
import {View, StyleSheet} from 'react-native';
import NoResults from './NoResults';
import {Colors} from '../themes';

const SavedContainer = () => {
  return (
    <View style={styles.wrapper}>
      <NoResults />
    </View>
  );
};
export default SavedContainer;

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: Colors.white,
  },
});
