import React, {useRef} from 'react';
// import {PropTypes} from 'prop-types';
import {View, Easing, Animated, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const RadioInput = ({
  selected,
  iconColor,
  selectedBackgroundColor,
  selectedBorderColor,
  backgroundColor,
  borderColor,
}) => {
  const scaleCheckMarkValue = useRef(new Animated.Value(0)).current;

  const scaleCheckMark = (value) => {
    Animated.timing(scaleCheckMarkValue, {
      toValue: value,
      duration: 400,
      easing: Easing.easeOutBack,
      useNativeDriver: true,
    }).start();
  };

  const background = selected ? selectedBackgroundColor : backgroundColor;
  const border = selected ? selectedBorderColor : borderColor;

  const iconScale = scaleCheckMarkValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.01, 1.6, 1],
  });

  const scaleValue = selected ? 1 : 0;
  scaleCheckMark(scaleValue);

  return (
    <View
      style={[
        {backgroundColor: background, borderColor: border},
        styles.wrapper,
      ]}>
      <Animated.View
        style={[{transform: [{scale: iconScale}]}, styles.iconWrapper]}>
        <Icon name="md-checkmark" color={iconColor} size={20} />
      </Animated.View>
    </View>
  );
};

export default RadioInput;

// RadioInput.propTypes = {
//   backgroundColor: PropTypes.string.isRequired,
//   borderColor: PropTypes.string.isRequired,
//   selectedBackgroundColor: PropTypes.string.isRequired,
//   selectedBorderColor: PropTypes.string.isRequired,
//   selected: PropTypes.bool.isRequired,
//   iconColor: PropTypes.string.isRequired,
// };

const styles = StyleSheet.create({
  wrapper: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginTop: 2,
  },
});
