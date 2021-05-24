// Inspiration: https://dribbble.com/shots/7594892-Food-display-animation

import * as React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {SPACING, fonts, width, height} from '../../config/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import {CELL_WIDTH} from './FoodList';
import {SharedElement} from 'react-navigation-shared-element';
import {ScrollView} from 'react-native-gesture-handler';
AntDesign.loadFont();
const AnimatableAntDesign = Animatable.createAnimatableComponent(AntDesign);

const DURATION = 400;
const fadeInOpacity = {
  0: {opacity: 0, translateY: 50},
  1: {opacity: 1, translateY: 0},
};

const createAnimation = (from) => ({
  0: {opacity: 0, translateY: -100, translateX: from},
  1: {opacity: 1, translateY: 0, translateX: 0},
});

const subcategoriesAnimations = [
  createAnimation(width * 0.3),
  createAnimation(0),
  createAnimation(-width * 0.3),
];

const FoodListDetails = ({navigation, route}) => {
  const {item} = route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <AnimatableAntDesign
        useNativeDriver
        delay={DURATION}
        animation="fadeIn"
        name="close"
        size={28}
        style={{
          padding: SPACING,
          position: 'absolute',
          top: SPACING,
          right: SPACING,
          zIndex: 2,
        }}
        color={'#333'}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <SharedElement
        id={`item.${item.key}.bg`}
        style={[StyleSheet.absoluteFillObject]}>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            {borderRadius: 0, backgroundColor: item.color},
          ]}
        />
      </SharedElement>
      <SharedElement
        id={`item.${item.key}.meta`}
        style={[StyleSheet.absoluteFillObject, {margin: SPACING}]}>
        <View style={{position: 'absolute', padding: SPACING}}>
          <Text style={styles.itemText} numberOfLines={1} adjustsFontSizeToFit>
            {item.type}
          </Text>
          <Text style={styles.itemSubType}>{item.subType}</Text>
        </View>
      </SharedElement>
      <ScrollView>
        <View style={{flex: 1, padding: SPACING, marginTop: height * 0.12}}>
          <SharedElement id={`item.${item.key}.image`} style={styles.itemImage}>
            <Image source={{uri: item.image}} style={styles.itemImage} />
          </SharedElement>
          <View style={styles.subCategories}>
            {item.subcategories.map((subcategory, index) => {
              return (
                <Animatable.View
                  key={index}
                  animation={subcategoriesAnimations[index]}
                  duration={500}
                  delay={DURATION + index * 100}
                  style={[
                    styles.subCategoriesImageContainer,
                    {backgroundColor: `${item.fullColor}77`},
                  ]}>
                  <Image
                    source={{uri: subcategory.image}}
                    style={[styles.subCategoryImage]}
                  />
                </Animatable.View>
              );
            })}
          </View>
          <Animatable.Text
            useNativeDriver
            animation={fadeInOpacity}
            delay={DURATION + 300}
            style={styles.itemPrice}>
            {item.price}
          </Animatable.Text>
          <Animatable.Text
            useNativeDriver
            animation={fadeInOpacity}
            delay={DURATION + 450}
            style={styles.itemDescription}>
            {item.description}
          </Animatable.Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemSubType: {
    fontSize: 12,
    // ...fonts.montserratRegular,
    opacity: 0.6,
  },
  itemText: {
    fontSize: 24,
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    width: CELL_WIDTH - SPACING * 2,
  },
  itemImage: {
    width: width * 0.6,
    height: width * 0.6,
    resizeMode: 'contain',
    alignSelf: 'center',
    zIndex: 9,
  },
  itemPrice: {
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: SPACING,
  },
  itemDescription: {
    // ...fonts.montserratRegular,
    marginBottom: SPACING,
  },
  subCategories: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: SPACING * 3,
  },
  subCategoriesImageContainer: {
    marginHorizontal: SPACING * 2,
    marginVertical: SPACING,
    padding: SPACING,
    borderRadius: 100,
  },
  subCategoryImage: {
    width: 36,
    height: 36,
  },
});

FoodListDetails.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}.meta`,
    },
    {
      id: `item.${item.key}.bg`,
    },
    {
      id: `item.${item.key}.image`,
    },
  ];
};

export default FoodListDetails;
