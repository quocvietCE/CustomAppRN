import React from 'react';
import {StyleSheet, Platform, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();

const menus = ['home', 'search1', 'hearto', 'calendar', 'user'];

export default function BottomTab({selected, onSelected}) {
  return (
    <View
      style={[
        styles.bottoms,
        Platform.OS === 'android' && {paddingBottom: 15},
      ]}>
      {menus.map((e, i) => {
        return (
          <TouchableOpacity key={e} onPress={() => onSelected(i)}>
            <AntDesign
              name={e}
              size={32}
              color={selected === i ? '#9E70A9' : '#222'}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottoms: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingBottom: 45,
  },
});
