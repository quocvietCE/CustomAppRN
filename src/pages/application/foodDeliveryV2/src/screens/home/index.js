import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SearchBar from '../../components/Search';
import ItemType from './ItemType';
import RestaurantItem from './RestaurantItem';
import BottomBar from './BottomBar';
import ModalOrder from '../order/ModalOrder';
import { types, listRestaurants } from '../../mockData';

const index = () => {
  const [isOrder, setIsOrder] = useState(false);
  const onPressItem = () => setIsOrder(true);
  const renderRestaurant = item => {
    return <RestaurantItem data={item} onPress={onPressItem} onClose />;
  };
  const onClose = () => setIsOrder(false);
  return (
    <ScrollView style={styles.wrap} showsVerticalScrollIndicator={false}>
      <View style={[styles.header]}>
        <View style={[styles.headerTitle]}>
          <Text style={styles.heading}>What do you have a taste for?</Text>
          <Text style={styles.description}>1240 Restaurants available</Text>
        </View>
        <View style={[styles.headerCart]}>
          <View style={styles.buttonCart}>
            <Image source={require('../../assets/images/cart.png')} />
            <Text style={styles.numCart}>2</Text>
          </View>
        </View>
      </View>
      <SearchBar />
      <View style={styles.listItemType}>
        {types.map((item, index) => {
          return <ItemType selected={index === 1} {...item} />;
        })}
      </View>
      <View style={styles.listRestaurant}>
        <Text style={styles.listRestaurantText}>
          Lunch Restaurants Near You
        </Text>
        <View style={styles.listRes}>
          {listRestaurants.map(renderRestaurant)}
        </View>
      </View>
      <BottomBar />
      {isOrder && <ModalOrder isShow={isOrder} onClose={onClose} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listRestaurantText: {
    // fontFamily: 'CeraPro-Medium',
    fontWeight: 'bold',
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    padding: 14,
  },
  headerTitle: {
    width: '55%',
  },
  headerCart: {},
  heading: {
    fontSize: 25,
    // fontFamily: 'CeraPro-Bold',
    fontWeight: 'bold',
    lineHeight: 30,
  },
  description: {
    // fontFamily: 'CeraPro-Medium',
    fontWeight: 'bold',
    color: 'gray',
    marginTop: 10,
  },
  buttonCart: {
    backgroundColor: '#F7CB6B',
    padding: 12,
    flexDirection: 'row',
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowColor: '#F7CB6B',
    shadowRadius: 2,
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-between',
  },
  numCart: {
    // fontFamily: 'CeraPro-Medium',
    fontWeight: 'bold',
    color: '#FFF',
    paddingLeft: 10,
  },
  listItemType: {
    flexDirection: 'row',
  },
  listRes: {
    marginBottom: 15,
  },

  listRestaurant: {
    marginTop: 10,
  },
});

export default index;
