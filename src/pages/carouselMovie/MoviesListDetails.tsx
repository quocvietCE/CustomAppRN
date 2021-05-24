import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Animated,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Genres from './Genres';
import Rating from './Rating';
import {SharedElement} from 'react-navigation-shared-element';
import {ITEM_SIZE} from '../carouselMovie';
import {ITEM_WIDTH, SPACING} from '../carouselMovie';
import {height, width, fonts} from '../../config/theme';
const TOP_HEADER_HEIGHT = height * 0.35;
import * as Animatable from 'react-native-animatable';
import {getActors} from './api';

AntDesign.loadFont();

const AnimatableScrollView = Animatable.createAnimatableComponent(ScrollView);
const DURATION = 150;
const HEADER_DURATION = 1000;
const HEADER_DELAY = 0;
const slideIn = {
  0: {translateY: 250},
  1: {translateY: 0},
};
const slideInBackwards = {
  0: {translateY: 0},
  1: {translateY: 250},
};
const fadeInBottom = {
  0: {opacity: 0, translateY: 100},
  1: {opacity: 1, translateY: 0},
};

const MoviesListDetails = ({navigation, route}) => {
  const [cast, setCast] = React.useState(null);
  const {item, nextImage, prevImage} = route.params;
  const prevImageRef = React.useRef();
  const nextImageRef = React.useRef();
  const imageRef = React.useRef();
  const scrollViewRef = React.useRef();
  React.useEffect(() => {
    const fetchData = async () => {
      const cast = await getActors(item.key);
      console.log('cast: ', cast);
      // Add empty items to create fake space
      // [empty_item, ...movies, empty_item]
      setCast(cast);
    };

    if (!cast) {
      fetchData(item.key);
    }
  }, [item.id]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <View
        style={{
          position: 'absolute',
          flexWrap: 'nowrap',
          top: 0,
          width,
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}>
        <Animatable.Image
          useNativeDriver
          ref={prevImageRef}
          duration={HEADER_DURATION}
          easing="ease-in-out"
          animation={slideIn}
          delay={HEADER_DELAY + 200}
          source={{uri: prevImage}}
          style={[styles.image, styles.secondaryImage, {left: 0, bottom: 60}]}
        />
        <Animatable.Image
          useNativeDriver
          ref={nextImageRef}
          duration={HEADER_DURATION}
          easing="ease-in-out"
          animation={slideIn}
          delay={HEADER_DELAY + 350}
          source={{uri: nextImage}}
          style={[styles.image, styles.secondaryImage, {right: 0, bottom: 20}]}
        />
        <Animatable.Image
          useNativeDriver
          ref={imageRef}
          duration={HEADER_DURATION}
          easing="ease-in-out"
          animation={slideIn}
          delay={HEADER_DELAY}
          source={{uri: item.poster}}
          style={[styles.image, {marginTop: SPACING}]}
        />
      </View>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <SharedElement id={`item.${item.key}.image`} style={styles.posterImage}>
          <Image source={{uri: item.poster}} style={styles.posterImage} />
        </SharedElement>
      </View>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {top: TOP_HEADER_HEIGHT, padding: SPACING},
        ]}>
        <SharedElement
          id={`item.${item.key}.backdrop`}
          style={[StyleSheet.absoluteFillObject]}>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: 'white',
                borderRadius: 34,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              },
            ]}
          />
        </SharedElement>
        <SharedElement id={`item.${item.key}.meta`}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24}} numberOfLines={1} adjustsFontSizeToFit>
              {item.title}
            </Text>
            <Rating rating={item.rating} />
            <Genres genres={item.genres} />
          </View>
        </SharedElement>
        <AnimatableScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}>
          <Animatable.Text
            useNativeDriver
            animation={fadeInBottom}
            delay={DURATION + 300}
            style={{
              // ...fonts.montserratBold,
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: SPACING,
            }}>
            Actors
          </Animatable.Text>
          {cast && (
            <FlatList
              data={cast}
              keyExtractor={(item) => item.key}
              contentContainerStyle={{justifyContent: 'space-evenly'}}
              horizontal
              decelerationRate="fast"
              // 2 by 2
              style={{marginBottom: SPACING}}
              snapToInterval={width * 0.66 + SPACING * 2}
              showsHorizontalScrollIndicator={false}
              renderItem={({item: cast, index}) => {
                return (
                  <Animatable.View
                    useNativeDriver
                    animation={fadeInBottom}
                    delay={DURATION + 300 + (index + 1) * 150}
                    style={{marginRight: SPACING, alignItems: 'center'}}>
                    <Image
                      source={{uri: cast.imageUri}}
                      style={{
                        borderRadius: 16,
                        width: width * 0.33,
                        height: width * 0.4,
                        resizeMode: 'cover',
                        marginBottom: SPACING / 2,
                      }}
                    />
                    <Text style={{fontSize: 12}}>{cast.name}</Text>
                  </Animatable.View>
                );
              }}
            />
          )}
          <Animatable.Text
            useNativeDriver
            animation={fadeInBottom}
            delay={DURATION + 900}
            style={{
              // ...fonts.montserratBold,
              fontWeight: 'bold',
              fontSize: 18,
              marginBottom: SPACING,
            }}>
            Introduction
          </Animatable.Text>
          <Animatable.Text
            useNativeDriver
            animation={fadeInBottom}
            delay={DURATION + 1050}
            style={{fontSize: 13, lineHeight: 20}}>
            {item.description}
          </Animatable.Text>
        </AnimatableScrollView>
      </View>
      <AntDesign
        name="arrowleft"
        size={24}
        style={{position: 'absolute', top: SPACING, left: SPACING}}
        color={'#fff'}
        onPress={() => {
          imageRef.current.animate(slideInBackwards, 500),
            scrollViewRef.current.fadeOut(400);
          Promise.all([
            nextImageRef.current.animate(slideInBackwards, 200),
            prevImageRef.current.animate(slideInBackwards, 300),
          ]).then(() => {
            navigation.goBack();
          });
        }}
      />
    </SafeAreaView>
  );
};

MoviesListDetails.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}.backdrop`,
      // animation: 'fade-out',
      // resize: 'none'
    },
    {
      id: `item.${item.key}.meta`,
      animation: 'fade',
      resize: 'none',
    },
    {
      id: `item.${item.key}.image`,
    },
  ];
};

const styles = StyleSheet.create({
  secondaryImage: {
    position: 'absolute',
    width: width * 0.33,
    height: width * 0.33 * 1.5,
    bottom: (width * 0.33 * 1.5) / 2,
  },
  image: {
    width: width * 0.55,
    height: width * 0.55 * 1.5,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  posterImage: {
    opacity: 0,
    transform: [{scale: 0}],
    width: 10,
    height: 20,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
  },
});
export default MoviesListDetails;
