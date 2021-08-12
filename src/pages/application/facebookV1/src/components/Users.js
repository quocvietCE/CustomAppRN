import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';

import dataUserAvatar from '../hardData/userList';

const Users = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          horizontal
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          data={dataUserAvatar}
          renderItem={({item}) => (
            <View style={styles.user}>
              <Avatar source={item.linkImage} online={item.online} />
            </View>
          )}
          keyExtractor={({id}) => id}
          ListHeaderComponent={
            <TouchableOpacity style={styles.room}>
              <MaterialCommunityIcons
                name="video-plus"
                size={26}
                color="#E141FC"
              />
              <Text style={styles.text}>Create Room</Text>
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.bottomDivider} />
    </>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  scrollView: {
    paddingLeft: 11,
  },
  room: {
    width: 115,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#82b1ff',
    paddingHorizontal: 15,
    marginRight: 12,
  },
  text: {
    color: '#1777f2',
    fontSize: 12,
    paddingLeft: 6,
    flex: 1,
  },
  user: {
    marginRight: 13,
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f2f5',
  },
});
