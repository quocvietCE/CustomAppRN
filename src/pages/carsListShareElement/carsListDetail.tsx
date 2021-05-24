import * as React from 'react';
import {ScrollView, StyleSheet, View, Text, Image} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {width, fonts, SPACING, height} from '../../config/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import {colors} from '../../config/data/vwcars';

AntDesign.loadFont();

const AnimatableScrollView = Animatable.createAnimatableComponent(ScrollView);

const animation = {
  0: {
    opacity: 0,
    translateX: 200,
  },
  1: {
    opacity: 1,
    translateX: 0,
  },
};

const CarsDetails = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <SafeAreaView style={{flex: 1}}>
      <AntDesign
        name="close"
        size={28}
        style={{
          padding: 12,
          position: 'absolute',
          top: SPACING * 2,
          right: 0,
          zIndex: 2,
        }}
        color={'#333'}
        onPress={() => {
          // animation(0).start()
          navigation.goBack();
        }}
      />
      <View
        style={{
          width: width * 0.6,
          position: 'absolute',
          top: SPACING * 2,
          left: SPACING,
        }}>
        <SharedElement id={`item.${item.key}.model`}>
          <Text style={styles.model} numberOfLines={1} adjustsFontSizeToFit>
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
          style={{flex: 1, resizeMode: 'contain'}}
        />
      </SharedElement>
      <AnimatableScrollView
        useNativeDriver
        animation={animation}
        delay={250}
        style={{flexGrow: 0, marginBottom: SPACING}}
        contentContainerStyle={{padding: SPACING}}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {colors.map((color) => {
          return (
            <View
              key={color}
              style={[styles.switch, {backgroundColor: color}]}
            />
          );
        })}
      </AnimatableScrollView>
      <Animatable.View
        useNativeDriver
        animation={animation}
        delay={400}
        style={{
          flexDirection: 'row',
          padding: SPACING * 2,
          justifyContent: 'space-between',
          borderColor: 'rgba(0,0,0,0.1)',
          borderBottomWidth: 1,
          borderTopWidth: 1,
        }}>
        <Text
          style={{
            // ...fonts.montserratBold,
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          Get a free service
        </Text>
        <AntDesign name="arrowright" color="rgba(0,0,0,0.8)" size={20} />
      </Animatable.View>
      <Animatable.View
        useNativeDriver
        animation={animation}
        delay={500}
        style={{
          flexDirection: 'row',
          padding: SPACING * 2,
          justifyContent: 'space-between',
          borderColor: 'rgba(0,0,0,0.1)',
          borderBottomWidth: 1,
        }}>
        <Text
          style={{
            // ...fonts.montserratBold
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          Save 10% and buy now!
        </Text>
        <AntDesign name="arrowright" color="rgba(0,0,0,0.8)" size={20} />
      </Animatable.View>
    </SafeAreaView>
  );
};

CarsDetails.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}.image`,
    },
    {
      id: `item.${item.key}.model`,
    },
    {
      id: `item.${item.key}.description`,
    },
  ];
};

const styles = StyleSheet.create({
  model: {
    // ...fonts.montserratBold,
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: SPACING / 2,
    opacity: 0.8,
    position: 'absolute',
  },
  description: {
    // ...fonts.montserratRegular,
    fontSize: 14,
    opacity: 0.4,
    top: 36 * 1.1,
    position: 'absolute',
  },
  image: {
    height: width,
    width: width * 2.1,
    right: width * 0.1,
    top: 0,
  },
  switch: {
    width: 58,
    height: 58,
    borderRadius: 12,
    marginRight: SPACING,
  },
});

export default CarsDetails;
