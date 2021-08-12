import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AppBar from './src/components/AppBar';
import ToolBar from './src/components/ToolBar';
import Users from './src/components/Users';
import Story from './src/components/Story';
import Feed from './src/components/Feed';

const App = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        style={[
          styles.scrollView,
          { paddingTop: insets.top, marginBottom: insets.bottom },
        ]}>
        <AppBar />
        <ToolBar />
        <Users />
        <Story />
        <Feed />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
