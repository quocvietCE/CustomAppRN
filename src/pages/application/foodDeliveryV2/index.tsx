import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';

// import SearchBar from './src/components/Search';
// import ItemType from './src/screens/home/ItemType';
// import RestaurantItem from './src/screens/home/RestaurantItem';
// import BottomBar from './src/screens/home/BottomBar';

// import {types, listRestaurants} from './src/mockData';

import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
