import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from 'react-native';

import {icons, COLORS, FONTS, SIZES} from '../constants';
import {
  categoryData,
  restaurantData,
  initialCurrentLocation,
} from '../constants/mockData/foodDelivery';

const Home = ({navigation, route}) => {
  const [categories, setCategories] = React.useState(categoryData);
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.btnLeft}>
          <Image
            source={icons.nearby}
            resizeMode="contain"
            style={styles.imageLeft}
          />
        </TouchableOpacity>

        <View style={styles.middleHeader}>
          <View style={styles.containerMiddleHeader}>
            <Text style={styles.titleHeader}>{currentLocation.streetName}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.btnRight}>
          <Image
            source={icons.basket}
            resizeMode="contain"
            style={styles.imageLeft}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const onSelectCategories = (category) => {
    const restaurantList = restaurantData.filter((item) =>
      item.categories.includes(category.id),
    );
    setRestaurants(restaurantList);
    setSelectedCategory(category);
  };

  const renderMainCategories = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={[
            styles.containerItemHeader,
            styles.shadow,
            {
              backgroundColor:
                selectedCategory?.id === item.id
                  ? COLORS.primary
                  : COLORS.white,
            },
          ]}
          onPress={() => onSelectCategories(item)}>
          <View
            style={[
              styles.itemHeader,
              {
                backgroundColor:
                  selectedCategory?.id === item.id
                    ? COLORS.white
                    : COLORS.lightGray,
              },
            ]}>
            <Image
              source={item.icon}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </View>
          <Text
            style={[
              styles.titleCategories,
              {
                color:
                  selectedCategory?.id === item.id
                    ? COLORS.white
                    : COLORS.black,
              },
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View style={styles.containerCategories}>
        <Text style={{...FONTS.h1}}>Main</Text>
        <Text style={{...FONTS.h1}}>Categories</Text>

        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{paddingVertical: SIZES.padding * 2}}
        />
      </View>
    );
  };

  function getCategoryNameById(id) {
    let category = categories.filter((a) => a.id == id);

    if (category.length > 0) {
      return category[0].name;
    }

    return '';
  }

  const renderRestaurantList = () => {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{marginBottom: SIZES.padding * 2}}
          // onPress -> navigate to Restaurant screen
          onPress={() =>
            navigation.navigate('Restaurant', {
              item,
              currentLocation,
            })
          }>
          <View style={{marginBottom: SIZES.padding}}>
            <Image
              source={item.photo}
              resizeMode="cover"
              style={{width: '100%', height: 200, borderRadius: SIZES.radius}}
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                // top: 0,
                // right: 0,
                height: 50,
                width: SIZES.width * 0.3,
                backgroundColor: COLORS.white,
                borderTopRightRadius: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                ...styles.shadow,
              }}>
              <Text style={{...FONTS.h4}}>{item.duration}</Text>
            </View>
          </View>
          {/* Restaurant Info */}
          <Text style={{...FONTS.body2}}>{item.name}</Text>
          <View style={{marginTop: SIZES.padding, flexDirection: 'row'}}>
            {/* Rating */}
            <Image
              source={icons.star}
              style={{
                height: 20,
                width: 20,
                tintColor: COLORS.primary,
                marginRight: 10,
              }}
            />
            <Text style={{...FONTS.body3}}>{item.rating}</Text>
            {/* Categories */}
            <View
              style={{
                flexDirection: 'row',
                marginLeft: 10,
              }}>
              {item.categories.map((categoryId) => {
                return (
                  <View style={{flexDirection: 'row'}} key={categoryId}>
                    <Text style={{...FONTS.body3}}>
                      {getCategoryNameById(categoryId)}
                    </Text>
                    <Text style={{...FONTS.h3, color: COLORS.darkgray}}>
                      {' '}
                      .{' '}
                    </Text>
                  </View>
                );
              })}

              {/* Price */}
              {[1, 2, 3].map((priceRating) => (
                <Text
                  key={priceRating}
                  style={{
                    ...FONTS.body3,
                    color:
                      priceRating <= item.priceRating
                        ? COLORS.black
                        : COLORS.darkgray,
                  }}>
                  $
                </Text>
              ))}
            </View>
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <FlatList
        data={restaurants}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          paddingHorizontal: SIZES.padding,
          paddingBottom: 30,
        }}
        renderItem={renderItem}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderMainCategories()}
      {renderRestaurantList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    height: 50,
    // backgroundColor: 'red'
  },
  btnLeft: {
    width: 50,
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  btnRight: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
    // backgroundColor: 'red'
  },
  imageLeft: {
    width: 30,
    height: 30,
  },
  middleHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerMiddleHeader: {
    width: '70%',
    height: '100%',
    backgroundColor: COLORS.lightGray3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
  },
  titleHeader: {
    ...FONTS.h3,
  },
  containerCategories: {
    padding: SIZES.padding * 2,
  },
  containerItemHeader: {
    padding: SIZES.padding,
    paddingBottom: SIZES.padding * 2,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.padding,
  },
  itemHeader: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  titleCategories: {
    marginTop: SIZES.padding,
    color: COLORS.white,
    ...FONTS.body5,
  },
  containerRestaurantList: {},
});

export default Home;
