import React from 'react';
import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import Swipeable from 'react-native-swipeable';
import {SwipeListView} from 'react-native-swipe-list-view';
import {listFood} from '../../mockData';
import FoodItem from './FoodItem';

const renderHiddenItem = (data, rowMap) => {
  return (
    <HiddenItemWithActions
      data={data}
      rowMap={rowMap}
      onClose={() => this.closeRow(rowMap, data.name)}
      onDeleted={() => alert('fuck')}
    />
  );
};

const HiddenItemWithActions = (onClose, onDeleted) => {
  return (
    <View style={styles.rowBack}>
      {/* <Pressable
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => alert('fuck you')}>
        <Text>Close</Text>
      </Pressable> */}
      <Pressable
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => alert('fuck you')}>
        <Image source={require('../../assets/images/garbage.png')} />
      </Pressable>
    </View>
  );
};

const closeRow = (rowMap, rowKey) => {};

const deleteRow = (rowMap, rowKey) => {
  alert('rowMap', rowMap);
};

const renderFood = (data) => {
  return (
    <SwipeListView
      data={data}
      // leftOpenValue={75}
      rightOpenValue={-80}
      renderHiddenItem={renderHiddenItem}
      disableRightSwipe
      renderItem={(data) => <FoodItem data={data.item} key={data.item.name} />}
    />
  );
};

const ListFood = () => {
  return (
    <View style={styles.container}>
      <View style={styles.listFood}>{renderFood(listFood)}</View>
    </View>
  );
};

export default ListFood;

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
    // justifyContent: 'space-between',
    // paddingLeft: 15,
    // margin: 5,
    // marginBottom: 15,
    marginTop: 15,
    borderRadius: 5,
  },
  backRightBtn: {
    // alignItems: 'flex-end',
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 80,
    paddingRight: 8,
  },
  backRightBtnLeft: {
    backgroundColor: '#1f65ff',
    right: 80,
  },
  backRightBtnRight: {
    // backgroundColor: 'red',
    right: 0,
    width: 80,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#1f65',
  },
  container: {
    // backgroundColor: 'gray',
    // flex: 1,
  },
  listFood: {
    // flex: 1,
  },
});
