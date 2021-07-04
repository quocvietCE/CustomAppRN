import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {SPACING, fonts, width} from '../../config/theme';

const AVATAR_SIZE = 64;

export default function UserCard({user}) {
  console.log('user: ', user);
  return (
    <View style={styles.card}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: SPACING * 2,
        }}>
        <Image source={{uri: user.avatar}} style={styles.avatar} />
        <View style={{flex: 1}}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.name}>
            {user.name}
          </Text>
          <Text style={styles.job}>{user.job}</Text>
        </View>
      </View>
      <View style={styles.detailsList}>
        {user.details.map(({label, value}) => {
          return (
            <View key={label} style={styles.detailsItem}>
              <Text style={styles.detailValue}>{value}</Text>
              <Text style={styles.detailLabel}>{label}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: SPACING * 2,
    width: width * 0.9,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: SPACING * 2,
  },
  name: {
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: SPACING / 3,
  },
  job: {
    // ...fonts.montserratRegular,
    fontSize: 16,
    color: '#999',
  },
  detailsList: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  detailsItem: {
    alignItems: 'center',
  },
  detailLabel: {
    // ...fonts.montserratRegular,
    color: '#999',
    fontSize: 11,
  },
  detailValue: {
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: SPACING / 3,
  },
});
