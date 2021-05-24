import * as React from 'react';
import {
  Dimensions,
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import {SharedElement} from 'react-navigation-shared-element';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {ITEM_WIDTH, SPACING} from './TravelList';
const {width, height} = Dimensions.get('window');
import * as Animatable from 'react-native-animatable';

const AnimatedAntDesign = Animated.createAnimatedComponent(AntDesign);
const d = [...Array(5).keys()];

const Detail = (props) => {
  const {item} = props.route.params;
  const bgRef = React.useRef();
  const zoomIn = {
    0: {
      opacity: 0,
      scale: 0,
    },
    1: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <View style={{flex: 1}}>
      <AntDesign
        name="arrowleft"
        size={28}
        style={{
          padding: 12,
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 2,
        }}
        color={'#fff'}
        onPress={() => {
          bgRef.current.fadeOut(400);
          props.navigation.goBack();
        }}
      />
      <SharedElement
        id={`item.${item.key}.photo`}
        style={[StyleSheet.absoluteFillObject]}>
        <Animated.Image
          source={{uri: item.image}}
          style={{width, height, borderRadius: 0, resizeMode: 'cover'}}
        />
      </SharedElement>
      <Animatable.View
        ref={bgRef}
        animation="fadeIn"
        duration={800}
        delay={400}
        style={[
          StyleSheet.absoluteFillObject,
          {backgroundColor: 'rgba(0,0,0,0.3)'},
        ]}
      />
      <SharedElement
        id={`item.${item.key}.location`}
        style={{
          position: 'absolute',
          width: ITEM_WIDTH - SPACING * 2,
          top: 100,
          left: 34,
        }}>
        <Text
          style={{
            fontSize: 32,
            color: 'white',
            fontWeight: '800',
            letterSpacing: -1,
            textTransform: 'uppercase',
          }}>
          {item.location}
        </Text>
      </SharedElement>
      <View style={{position: 'absolute', bottom: 100}}>
        <Text
          style={{
            fontWeight: '900',
            margin: 20,
            textTransform: 'uppercase',
            fontSize: 18,
            marginBottom: 0,
            color: '#fff',
          }}>
          Activities
        </Text>
        <Animated.FlatList
          data={d}
          keyExtractor={(item) => String(item)}
          horizontal
          contentContainerStyle={{margin: 20}}
          renderItem={({item, index}) => {
            return (
              <Animatable.View
                duration={600}
                animation={zoomIn}
                delay={400 + 100 * index}
                style={{
                  width: width / 3,
                  height: width / 2,
                  backgroundColor: 'white',
                  marginRight: 20,
                  padding: 10,
                }}>
                <Image
                  source={{
                    uri:
                      'https://miro.medium.com/max/4064/1*qYUvh-EtES8dtgKiBRiLsA.png',
                  }}
                  style={{
                    width: '100%',
                    height: '70%',
                    resizeMode: 'cover',
                    marginBottom: 10,
                  }}
                />
                <Text style={{fontWeight: '700'}}>Activity {index + 1}</Text>
              </Animatable.View>
            );
          }}
        />
      </View>
    </View>
  );
};

Detail.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}.photo`,
    },
    {
      id: `item.${item.key}.location`,
    },
  ];
};

export default Detail;
