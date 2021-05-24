import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {width, height} from '../../config/theme';
import {SharedElement} from 'react-navigation-shared-element';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {avatars} from '../../config/data/travelup';

const TravelUpDetails = ({navigation, route}) => {
  const {item} = route.params;
  const bgRef = React.useRef();
  const bottomRef = React.useRef();

  return (
    <View style={{flex: 1, backgroundColor: '#1E1D1D'}}>
      <SharedElement id={`item.${item.key}.photo`}>
        <Image
          source={{uri: item.image}}
          style={[StyleSheet.absoluteFillObject, styles.image]}
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
        ]}>
        <AntDesign
          name="arrowleft"
          size={28}
          style={{
            padding: 12,
            position: 'absolute',
            top: 40,
            left: 20,
            zIndex: 2,
          }}
          color={'#fff'}
          onPress={() => {
            // animation(0).start()
            bgRef.current.fadeOut(500);
            bottomRef.current.fadeOut(300).then((endState) => {
              if (endState.finished) {
                navigation.goBack();
              }
            });
          }}
        />
        <LinearGradient
          colors={['transparent', '#000', '#000']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: height / 2,
          }}
        />
      </Animatable.View>
      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 70,
          justifyContent: 'flex-end',
        }}>
        <View style={{alignSelf: 'flex-start', padding: 20}}>
          <SharedElement id={`item.${item.key}.name`}>
            <Text
              style={styles.name}
              adjustsFontSizeToFit={true}
              numberOfLines={1}>
              {item.name}
            </Text>
          </SharedElement>
        </View>
        <Animatable.View
          ref={bottomRef}
          animation="fadeIn"
          duration={800}
          delay={700}
          style={{
            width,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View>
            <Text style={styles.heading}>Your team</Text>
            <View style={{flexDirection: 'row'}}>
              {avatars.map((uri, index) => {
                return (
                  <Image
                    key={index}
                    source={{uri}}
                    style={[
                      styles.avatar,
                      {zIndex: 5 - index, marginLeft: index === 0 ? 0 : -20},
                    ]}
                  />
                );
              })}
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Distance</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={styles.number}>
                {Math.floor(Math.random() * 40) + 20}
              </Text>
              <Text style={styles.numberType}>km</Text>
            </View>
          </View>
          <View>
            <Text style={styles.heading}>Height</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
              <Text style={styles.number}>
                {Math.floor(Math.random() * 2200) + 1000}
              </Text>
              <Text style={styles.numberType}>m</Text>
            </View>
          </View>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width,
    height,
    resizeMode: 'cover',
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 26,
    borderWidth: 4,
    borderColor: '#000',
  },
  heading: {
    color: '#fff',
    fontWeight: '300',
    marginBottom: 8,
  },
  number: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 32,
    marginRight: 2,
    marginBottom: -5,
  },
  numberType: {
    color: '#fff',
    fontSize: 12,
  },
  name: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 62,
    fontWeight: '900',
    // position: "absolute"
  },
});

TravelUpDetails.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}.photo`,
      // animation: 'fade-in',
      // resize: 'stretch'
    },
    {
      id: `item.${item.key}.name`,
    },
  ];
};

export default TravelUpDetails;
