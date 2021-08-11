import React from 'react';
import {Colors} from '../themes';
import {View, StyleSheet, Modal, Image} from 'react-native';

const Loader = ({animationType, modalVisible}) => {
  return (
    <Modal
      visible={modalVisible}
      animationType={animationType}
      transparent={true}>
      <View style={styles.wrapper}>
        <View style={styles.loaderContainer}>
          <Image
            style={styles.loaderImage}
            source={require('../assets/images/greenLoader.gif')}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

// Loader.propTypes = {
//   animationType: PropTypes.string.isRequired,
//   modalVisible: PropTypes.bool.isRequired,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    zIndex: 9,
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  loaderImage: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },
  loaderContainer: {
    width: 90,
    height: 90,
    backgroundColor: Colors.white,
    borderRadius: 15,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
});
