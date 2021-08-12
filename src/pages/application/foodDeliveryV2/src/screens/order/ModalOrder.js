import React from 'react';
import { StyleSheet, View, Modal, Dimensions } from 'react-native';
import OrderScreen from './OrderScreen';

const h = Dimensions.get('screen').height;

const ModalOrder = ({ isShow, onClose }) => {
  return (
    <Modal visible={isShow} style={styles.container} transparent>
      <View style={styles.content} />
      <OrderScreen onClose={onClose} />
    </Modal>
  );
};

export default ModalOrder;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'rgba(0,0,233,0.4)',
    // justifyContent: 'flex-end',
    // backgroundColor: 'transparent',
    flex: 1,
  },
  content: {
    // flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    height: h / 5,
  },
});
