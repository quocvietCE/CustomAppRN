import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const AddressList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.address}>624 Maple Ave</Text>
        <Text style={styles.text}>Edit Address</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.timeContainer}>
          <View style={styles.iconTime}>
            <Image source={require('../../assets/images/clock.png')} />
          </View>
          <Text style={styles.timeText}>30 mins</Text>
        </View>
        <Text style={styles.text}>Choose time</Text>
      </View>
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  address: {
    // fontFamily: 'CeraPro-Bold',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  timeText: {
    // fontFamily: 'CeraPro-Bold',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  iconTime: {
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.14)',
    borderRadius: 10,
  },
  timeContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#F7CB6b',
    paddingVertical: 10,
    borderRadius: 8,
  },
  text: {
    // fontFamily: 'CeraPro-Medium',
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 10,
  },
});
