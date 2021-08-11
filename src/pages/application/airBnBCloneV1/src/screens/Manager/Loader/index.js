import * as React from 'react';
import {View, Modal, Image} from 'react-native';
// import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import styles from './styles';

const Loader = () => {
  const isLoading = useSelector(state => state.app.isLoading);
  return (
    <Modal visible={isLoading} animationType={'fade'} transparent={true}>
      <View style={styles.wrapper}>
        <View style={styles.loaderContainer}>
          <Image
            style={styles.loaderImage}
            source={require('../../../assets/images/greenLoader.gif')}
          />
        </View>
      </View>
    </Modal>
  );
};

// Loader.propTypes = {
//   isLoading: PropTypes.bool,
// };

Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
