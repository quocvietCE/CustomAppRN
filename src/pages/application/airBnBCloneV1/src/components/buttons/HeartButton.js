import React, {useState, useEffect} from 'react';
// import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
Icon.loadFont();

const HeartButton = ({selected, selectedColor, color, onPress}) => {
  const [addedToFavorite, setAddedToFavorite] = useState(false);

  useEffect(() => setAddedToFavorite(selected), [selected]);

  const addToFavorite = () => {
    setAddedToFavorite(!addedToFavorite);
    onPress();
  };

  return (
    <TouchableOpacity testID="heartBtn" onPress={addToFavorite}>
      <View>
        <Icon
          name={addedToFavorite ? 'heart' : 'heart-o'}
          color={addedToFavorite ? selectedColor : color}
          size={18}
        />

        <Icon
          name="heart-o"
          size={18}
          color={color}
          style={[
            addedToFavorite ? styles.iconFull : styles.icon,
            styles.selectedColor,
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HeartButton;

// HeartButton.propTypes = {
//   color: PropTypes.string.isRequired,
//   selectedColor: PropTypes.string.isRequired,
//   onPress: PropTypes.func,
// };

const styles = StyleSheet.create({
  selectedColor: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  iconFull: {
    display: 'flex',
  },
  icon: {
    display: 'none',
  },
});
