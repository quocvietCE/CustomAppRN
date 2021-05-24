import * as React from 'react';
import {
  StatusBar,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import data from '../../config/data/data';
import {FlatList} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {SIZE, ICON_SIZE, SPACING} from '../../config/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import GoBack from '../../components/GoBack';
const {width} = Dimensions.get('screen');

// https://unsplash.com/collections/4788459/wildlife

const BottomCard = () => {
  return (
    <View
      style={{
        backgroundColor: 'gold',
        padding: 20,
        borderRadius: 16,
        margin: SPACING,
      }}>
      <View>
        <Text
          style={{
            color: '#333',
            fontSize: 21,
            textTransform: 'uppercase',
            letterSpacing: -1,
            fontWeight: '800',
          }}>
          Shared Element Transition
        </Text>
        <Text
          style={{
            color: '#333',
            fontSize: 16,
            textTransform: 'uppercase',
            letterSpacing: -1,
            fontWeight: '800',
          }}>
          + React Native
        </Text>
        <Text
          style={{
            color: '#333',
            fontSize: 16,
            textTransform: 'uppercase',
            letterSpacing: -1,
            fontWeight: '800',
          }}>
          + Expo
        </Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <Text style={{color: '#444', fontSize: 11, fontWeight: '700'}}>
          @mironcatalin
        </Text>
        <Text style={{color: '#444', fontSize: 11, fontWeight: '700'}}>
          youtube.com/c/CatalinMironDev
        </Text>
      </View>
    </View>
  );
};

const d = [
  {
    title: 'Sunny days',
    color: 'turquoise',
  },
  {
    title: 'Sand & beach',
    color: 'aquamarine',
  },
  {
    title: 'Coktails & Party',
    color: 'tomato',
  },
  {
    title: 'All-inclusive',
    color: '#A531F9',
  },
];

export default function List({navigation}) {
  return (
    <SafeAreaView>
      <GoBack />
      <StatusBar hidden />
      <FlatList
        data={d}
        keyExtractor={(item) => item.color}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{padding: SPACING}}
        snapToInterval={width * 0.74 + SPACING}
        decelerationRate="fast"
        renderItem={({item}) => {
          return (
            <View
              style={{
                width: width * 0.74,
                height: width * 0.44,
                marginRight: SPACING,
              }}>
              <View
                style={{
                  backgroundColor: item.color,
                  flex: 1,
                  padding: SPACING,
                  borderRadius: 16,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 24,
                    textTransform: 'uppercase',
                    letterSpacing: -1,
                    fontWeight: '800',
                  }}>
                  {item.title}
                </Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          marginVertical: 20,
        }}>
        {data.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{padding: SPACING, alignItems: 'center'}}
              onPress={() => navigation.push('Detail', {item})}>
              <SharedElement id={`item.${item.id}.photo`}>
                <View style={styles.item}>
                  <Image
                    source={{uri: item.imageUri}}
                    style={{width: ICON_SIZE, height: ICON_SIZE}}
                  />
                </View>
              </SharedElement>
            </TouchableOpacity>
          );
        })}
      </View>
      <BottomCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    height: SIZE,
    width: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: 'rgba(0,0,0,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
