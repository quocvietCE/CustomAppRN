import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Avatar from './Avatar';

const linkImage =
  'https://sohanews.sohacdn.com/2019/9/3/photo-1-15674713690051885929813.jpg';

const ToolBar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <Avatar source={linkImage} />
          <TextInput style={styles.input} placeholder="What's on your mind?" />
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <View style={styles.menu}>
            <Ionicons name="ios-videocam" size={22} color="#F44" />
            <Text style={styles.menuText}>Live</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.menu}>
            <MaterialIcons
              name="photo-size-select-actual"
              size={20}
              color="#4caf50"
            />
            <Text style={styles.menuText}>Image</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.menu}>
            <MaterialCommunityIcons
              name="video-plus"
              size={22}
              color="#e141fc"
            />
            <Text style={styles.menuText}>Room</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomDivider} />
    </>
  );
};

export default ToolBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 92,
  },
  row: {
    paddingHorizontal: 11,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 8,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#F0F0F0',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    flex: 1,
  },
  menuText: {
    paddingLeft: 11,
    fontWeight: '500',
    fontSize: 12,
  },
  separator: {
    width: 1,
    height: 26,
    backgroundColor: '#f0f0f0',
  },
  bottomDivider: {
    width: '100%',
    height: 9,
    backgroundColor: '#f0f2f5',
  },
});
