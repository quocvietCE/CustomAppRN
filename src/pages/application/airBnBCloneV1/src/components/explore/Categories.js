import React from 'react';
import {ScrollView, StyleSheet, TouchableHighlight, Image} from 'react-native';
import {iPhoneSize} from '../../helpers/Regex';

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === 'small') {
  cardSize = 90;
  cardMargin = 4;
} else if (size === 'large') {
  cardSize = 115;
}

const Categories = ({categories}) => {
  const CategoriesData = () => {
    return categories.map((category, index) => (
      <TouchableHighlight style={styles.card} key={`category-item-${index}`}>
        <Image source={category.photo} style={styles.image} />
      </TouchableHighlight>
    ));
  };

  return (
    <ScrollView
      contentContainerStyle={styles.wrapper}
      horizontal
      showHorizontalScrollIndicator={false}>
      {CategoriesData()}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: cardSize,
    height: cardSize,
    marginRight: cardMargin,
    marginLeft: cardMargin,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
