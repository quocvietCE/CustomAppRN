import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
// import {Card, CardItem, Left, Body, Thumbnail} from 'native-base';
import styles from './styles';

const StickyHeader = ({name, img, onImgTap}) => {
  return (
    <View style={styles.cardStyle}>
      <View style={styles.cardItemStyle}>
        <TouchableOpacity onPress={onImgTap}>
          {img ? (
            <Image
              source={{uri: img}}
              resizeMode="cover"
              style={styles.logoContainer}
            />
          ) : (
            <Text style={styles.thumbnailName}>{name.charAt(0)}</Text>
          )}
        </TouchableOpacity>
        <Text style={styles.profileName}>{name}</Text>
      </View>
    </View>
  );
};

export default StickyHeader;
