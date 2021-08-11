import React, {useRef} from 'react';
// import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Easing,
  Animated,
} from 'react-native';
import {Colors} from '../themes';
Icon.loadFont();

const Notification = ({
  type,
  firstLine,
  secondLine,
  showNotification,
  handleCloseNotification,
}) => {
  const positionValue = useRef(new Animated.Value(0)).current;

  const animateNotification = (value) => {
    Animated.timing(positionValue, {
      toValue: value,
      duration: 300,
      velocity: 3,
      tension: 2,
      friction: 8,
      easing: Easing.easeOutBack,
      useNativeDriver: false,
    }).start();
  };

  const closeNotification = () => {
    handleCloseNotification();
  };

  showNotification ? animateNotification(0) : animateNotification(80);
  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateY: positionValue,
            },
          ],
        },
        styles.wrapper,
      ]}>
      <View style={styles.errorMessageContainer}>
        <View style={[styles.errorMessage]}>
          <Text style={[styles.errorText]}>{type}</Text>
          <Text style={styles.errorMessage}>
            {firstLine} {secondLine}{' '}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.closeButton} onPress={closeNotification}>
        <Icon name="times" size={20} color={Colors.lightGray} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Notification;

// Notification.propTypes = {
//   showNotification: PropTypes.bool.isRequired,
//   type: PropTypes.string.isRequired,
//   firstLine: PropTypes.string,
//   secondLine: PropTypes.string,
//   handleCloseNotification: PropTypes.func,
// };

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
    height: 80,
  },
  notificationContent: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  errorText: {
    color: Colors.darkOrange,
    marginRight: 5,
    fontSize: 14,
    marginBottom: 2,
  },
  errorMessage: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
    fontSize: 14,
  },
  errorMessageContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 2,
  },
  closeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
