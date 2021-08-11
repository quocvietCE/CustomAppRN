import React from 'react';
// import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Colors} from '../../themes';
Icon.loadFont();

const NextArrowButton = ({disabled, handleNextButton}) => {
  const opacityStyle = disabled ? 0.2 : 0.6;
  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        style={[{opacity: opacityStyle}, styles.button]}
        onPress={handleNextButton}
        disabled={disabled}>
        <Icon
          name="angle-right"
          color={Colors.green01}
          size={32}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default NextArrowButton;

// NextArrowButton.propTypes = {
//   disabled: PropTypes.bool,
//   handleNextButton: PropTypes.func,
// };

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
    paddingTop: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: Colors.white,
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
  },
});
