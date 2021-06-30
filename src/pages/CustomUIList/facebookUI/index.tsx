import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FBSearchBar from './FBSearchBar';
import SearchBar from './SearchBar';
import StoriesList from './StoriesList';
import HeaderAnimated from './AnimatedHeader';

const FacebookAnimated = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      {/* <FBSearc hBar /> */}
      <StoriesList />
      {/* <HeaderAnimated  /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  fake_post: {
    backgroundColor: '#e4e6eb',
    height: 200,
    margin: 16,
    borderRadius: 16,
  },
});

export default FacebookAnimated;
