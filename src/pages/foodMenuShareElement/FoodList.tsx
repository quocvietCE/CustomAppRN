// Inspiration: https://dribbble.com/shots/7594892-Food-display-animation

import * as React from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import data, {tabs, popularFood} from '../../config/data/food';
import {SPACING, foodConfig, fonts, width} from '../../config/theme';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SharedElement} from 'react-navigation-shared-element';
import GoBack from '../../components/GoBack';

AntDesign.loadFont();

export const CELL_WIDTH = width * 0.64;
const CELL_HEIGHT = CELL_WIDTH * 1.4;
const FULL_SIZE = CELL_WIDTH + SPACING * 2;

export default function FoodList({navigation}) {
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  return (
    <>
      <GoBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex: 1, paddingVertical: SPACING}}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Good Morning</Text>
            <Text style={styles.subHeading}>
              Catalin. Good day starts with healthy food.
            </Text>
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.pillsScroll}>
            {tabs.map((item) => {
              const isSelectedTab = selectedTab === item;
              return (
                <TouchableOpacity
                  key={item}
                  style={[
                    styles.pill,
                    {
                      backgroundColor: isSelectedTab
                        ? foodConfig.colors.orange
                        : 'transparent',
                    },
                  ]}
                  onPress={() => setSelectedTab(item)}>
                  <Text
                    style={[
                      styles.pillText,
                      {
                        color: isSelectedTab
                          ? 'white'
                          : foodConfig.colors.orange,
                      },
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <StatusBar hidden />
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            horizontal
            snapToInterval={FULL_SIZE}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={{
                    height: CELL_HEIGHT,
                    width: CELL_WIDTH,
                    margin: SPACING,
                  }}
                  onPress={() =>
                    navigation.navigate('FoodListDetails', {item})
                  }>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <SharedElement
                      id={`item.${item.key}.bg`}
                      style={[StyleSheet.absoluteFillObject]}>
                      <View
                        style={[
                          StyleSheet.absoluteFillObject,
                          {borderRadius: 16, backgroundColor: item.color},
                        ]}
                      />
                    </SharedElement>
                    <SharedElement
                      id={`item.${item.key}.meta`}
                      style={[StyleSheet.absoluteFillObject]}>
                      <View style={{position: 'absolute', padding: SPACING}}>
                        <Text
                          style={styles.itemText}
                          numberOfLines={1}
                          adjustsFontSizeToFit>
                          {item.type}
                        </Text>
                        <Text style={styles.itemSubtype}>{item.subType}</Text>
                      </View>
                    </SharedElement>
                    <SharedElement
                      id={`item.${item.key}.image`}
                      style={styles.itemImage}>
                      <Image
                        source={{uri: item.image}}
                        style={styles.itemImage}
                      />
                    </SharedElement>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <View style={{paddingHorizontal: SPACING}}>
            <Text
              style={[
                styles.heading,
                {fontSize: 20, marginBottom: SPACING * 2},
              ]}>
              Popular
            </Text>
            <FlatList
              data={popularFood}
              keyExtractor={(item) => item.key}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      padding: SPACING,
                    }}>
                    <Image
                      source={{uri: item.image}}
                      style={styles.popularImage}
                    />
                    <View style={{justifyContent: 'space-evenly', flex: 1}}>
                      <Text
                        style={[styles.heading, {fontSize: 16, opacity: 0.8}]}>
                        {item.type}
                      </Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign
                          name="star"
                          size={16}
                          color={foodConfig.colors.orange}
                          style={{marginRight: SPACING / 2}}
                        />
                        <Text style={styles.rating}>{item.rating}</Text>
                      </View>
                    </View>
                    <Text
                      style={[styles.heading, {fontSize: 14, opacity: 0.8}]}>
                      {item.price}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    padding: SPACING,
  },
  heading: {
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: SPACING / 2,
  },
  subHeading: {
    // ...fonts.montserratRegular,
    fontSize: 12,
    opacity: 0.4,
  },
  pillsScroll: {flexGrow: 0, padding: SPACING},
  pill: {
    paddingVertical: SPACING,
    paddingHorizontal: SPACING * 1.5,
    marginRight: SPACING / 2,
    borderRadius: 16,
  },
  pillText: {
    // ...fonts.montserratBold,
    fontWeight: 'bold',
  },
  rating: {
    color: foodConfig.colors.orange,
    // ...fonts.montserratBold,
    fontWeight: 'bold',
  },
  popularImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
    marginRight: SPACING * 1.5,
  },
  itemSubtype: {
    fontSize: 12,
    // ...fonts.montserratRegular,
    opacity: 0.6,
  },
  itemText: {
    fontSize: 24,
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    width: CELL_WIDTH - SPACING * 2,
  },
  itemImage: {
    width: CELL_WIDTH * 0.64,
    height: CELL_WIDTH * 0.64,
    resizeMode: 'contain',
    position: 'absolute',
    alignSelf: 'center',
  },
});
