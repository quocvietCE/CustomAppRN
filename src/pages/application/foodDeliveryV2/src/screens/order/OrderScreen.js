import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import AddressList from './AddressList';
import ListFood from './ListFood';

const h = Dimensions.get('screen').height;

const OrderScreen = ({ onClose }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topPadding}>
        <Text style={styles.title}>Your Order</Text>
        <Pressable style={styles.clearButton} onPress={onClose}>
          <Image
            style={styles.iconClear}
            resizeMode="contain"
            source={require('../../assets/images/clear.png')}
          />
        </Pressable>
        <AddressList />
        <View style={styles.body}>
          <ListFood />
        </View>

        <View style={styles.footer}>
          <Text style={styles.total}>Total: $17</Text>
          <Pressable style={styles.buttonOrder}>
            <Text style={styles.textOrder}>Place Order</Text>
            <Image source={require('../../assets/images/arrow.png')} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  body: {},
  container: {
    // padding: 20,
    paddingVertical: 20,
    // marginTop: 40,
    backgroundColor: '#FFF',
    flex: 1,
    height: '80%',
    // borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    // fontFamily: 'CeraPro-Bold',
    fontWeight: 'bold',
    fontSize: 23,
    marginBottom: 30,
  },
  clearButton: {
    position: 'absolute',
    right: 20,
    top: 10,
  },
  iconClear: {
    width: 13,
    height: 13,
    color: '#000',
  },
  topPadding: {
    padding: 20,
  },
  total: {
    // fontFamily: 'CeraPro-Bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textOrder: {
    // fontFamily: 'CeraPro-Bold',
    fontWeight: 'bold',
    marginRight: 10,
  },
  buttonOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#58b4c6',
    padding: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#58b4c6',
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: h / 12,
  },
});
