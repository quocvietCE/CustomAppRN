import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Feather.loadFont();

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>facebook</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.btn}>
          <Feather size={29} color="black" name="search" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={29}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'orange',
    height: 58,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  text: {
    color: '#3a86e9',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  btn: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 16,
  },
  row: {
    flexDirection: 'row',
  },
});

export default AppBar;
