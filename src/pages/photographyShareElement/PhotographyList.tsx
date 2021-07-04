import * as React from 'react';
import {
  StatusBar,
  Dimensions,
  Animated,
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Easing,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {SPACING} from '../../config/theme';
import data from '../../config/data/photography';
import UserCard from './UserCard';
const {width, height} = Dimensions.get('screen');
import TouchableScale from 'react-native-touchable-scale';
import PhotographyDetails from './PhotographyDetails';
import GoBack from '../../components/GoBack';

export default function PhotographyList({navigation}) {
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <GoBack />
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1, height, width}}>
              <SharedElement
                id={`item.${item.key}.image`}
                style={
                  (StyleSheet.absoluteFillObject, {backgroundColor: 'red'})
                }>
                <Image
                  source={{uri: item.image}}
                  style={[StyleSheet.absoluteFillObject, styles.image]}
                />
              </SharedElement>
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    paddingBottom: 80,
                  },
                ]}>
                <TouchableScale
                  activeScale={0.8}
                  tension={20}
                  friction={7}
                  useNativeDriver
                  onPress={() =>
                    navigation.push('PhotographyListDetails', {item})
                  }>
                  <SharedElement id={`item.${item.key}.card`}>
                    <UserCard user={item.user} />
                  </SharedElement>
                </TouchableScale>
              </View>
            </View>
          );
        }}
      />
      <PhotographyDetails
        data={data}
        style={{position: 'absolute', top: 80, left: SPACING, right: SPACING}}
        scrollX={scrollX}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width,
    height: height,
    resizeMode: 'cover',
    padding: SPACING * 2,
    paddingBottom: 120,
    justifyContent: 'flex-end',
    opacity: 0.7,
  },
});
