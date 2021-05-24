import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import vwcars from '../../config/data/vwcars';
import {fonts, SPACING, width} from '../../config/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import GoBack from '../../components/GoBack';

const ITEM_SIZE = 120;

export default function CarsList({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GoBack />
      <StatusBar hidden />
      <FlatList
        data={vwcars}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{padding: SPACING}}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.item}
              activeOpacity={0.8}
              onPress={() => {
                console.log(`item.${item.key}.image`);
                navigation.navigate('CarsDetail', {item});
              }}>
              <View style={{width: width * 0.5}}>
                <SharedElement id={`item.${item.key}.model`}>
                  <Text
                    style={styles.model}
                    numberOfLines={1}
                    adjustsFontSizeToFit>
                    {item.model}
                  </Text>
                </SharedElement>
                <SharedElement id={`item.${item.key}.description`}>
                  <Text style={styles.description}>{item.description}</Text>
                </SharedElement>
              </View>
              <SharedElement id={`item.${item.key}.image`} style={styles.image}>
                <Image
                  source={{uri: item.image}}
                  style={{flex: 1, resizeMode: 'center'}}
                />
              </SharedElement>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    height: ITEM_SIZE,
    backgroundColor: '#C1CEE077',
    borderRadius: 12,
    overflow: 'hidden',
    padding: SPACING,
    marginBottom: SPACING,
    flexDirection: 'row',
  },
  model: {
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    fontSize: 18,
    opacity: 0.8,
    position: 'absolute',
  },
  description: {
    // ...fonts.montserratRegular,
    fontSize: 12,
    opacity: 0.4,
    top: 20 + SPACING / 2,
    position: 'absolute',
  },
  image: {
    height: ITEM_SIZE * 1.2,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: '-40%',
  },
});
