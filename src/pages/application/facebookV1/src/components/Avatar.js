import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Avatar = ({source, online, story}) => {
  return (
    <View style={styles.container}>
      <Image
        style={[styles.userImage, story && styles.border]}
        source={{uri: source}}
      />
      {online && <View style={styles.userActive} />}
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#1777f2',
  },
  userActive: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#4bcb1f',
    position: 'absolute',
    bottom: -2,
    right: -2,
    borderWidth: 2,
    borderColor: '#fff',
  },
  border: {borderWidth: 3},
});
