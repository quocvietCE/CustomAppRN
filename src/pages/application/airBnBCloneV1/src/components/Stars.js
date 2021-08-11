import React from 'react';
// import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../themes';
Icon.loadFont();

const Stars = ({votes, size, color}) => {
  const starsShow = () => {
    const starsNumber = parseInt(votes);
    const starElements = [];
    for (let i = 0; i < 5; i++) {
      starElements.push(
        <Icon
          key={`star-${i}`}
          name="star"
          size={size}
          color={starsNumber > i ? color : Colors.gray02}
          style={styles.star}
        />,
      );
    }
    return starElements;
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.stars}>
        {starsShow()}
        {votes ? <Text style={styles.votesNumber}>{votes}</Text> : null}
      </View>
    </View>
  );
};

export default Stars;

// Stars.propTypes = {
//   votes: PropTypes.number.isRequired,
//   size: PropTypes.number.isRequired,
//   color: PropTypes.string.isRequired,
// };

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 1,
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  votesNumber: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: 1,
    marginLeft: 3,
  },
});
