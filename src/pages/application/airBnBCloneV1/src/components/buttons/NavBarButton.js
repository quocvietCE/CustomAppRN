import React from 'react';
// import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const NavBarButton = ({location, text, color, icon, handleButtonPress}) => {
  const marginPosition =
    location === 'right' ? {marginRight: 20} : {marginLeft: 20};
  let content;
  if (text) {
    content = (
      <Text style={[{color}, marginPosition, styles.buttonText]}>{text}</Text>
    );
  } else {
    content = <View style={marginPosition}>{icon}</View>;
  }
  return (
    <TouchableOpacity testID="navBarButton" onPress={handleButtonPress}>
      {content}
    </TouchableOpacity>
  );
};

export default NavBarButton;

// NavBarButton.propTypes = {
//   text: PropTypes.string,
//   icon: PropTypes.object,
//   handleButtonPress: PropTypes.func.isRequired,
//   location: PropTypes.string,
//   color: PropTypes.string,
// };

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 16,
  },
});
