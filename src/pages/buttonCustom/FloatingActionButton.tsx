import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FloatingButton from './FloatingButton';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/map.png')}
        resizeMode="cover"
        style={{width: 500, height: 900, opacity: 0.5}}
      />
      <FloatingButton style={{bottom: 100}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 100,
  },
});
