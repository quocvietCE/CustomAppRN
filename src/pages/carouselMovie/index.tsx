import * as React from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {SharedElement} from 'react-navigation-shared-element';
import GoBack from '../../components/GoBack';
import {getMovies} from './api';
import Genres from './Genres';
import Rating from './Rating';
import LinearGradient from 'react-native-linear-gradient';

export const SPACING = 10;
export const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
export const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
export const BACKDROP_HEIGHT = height * 0.65;

const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

const Backdrop = ({movies, scrollX}) => {
  return (
    <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={item => item.key + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
        renderItem={({item, index}) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
                // backgroundColor: 'red',
              }}>
              <Image
                source={{uri: item.backdrop}}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
};

export default function App({navigation}) {
  const [movies, setMovies] = React.useState([]);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const backdropAnimated = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const fetchData = async () => {
      const movies = await getMovies();
      // Add empty items to create fake space
      // [empty_item, ...movies, empty_item]
      setMovies([{key: 'empty-left'}, ...movies, {key: 'empty-right'}]);
    };

    if (movies.length === 0) {
      fetchData(movies);
    }
  }, [movies]);

  if (movies.length === 0) {
    return <Loading />;
  }

  console.log('movies: ', movies);

  return (
    <View style={styles.container}>
      <GoBack />
      <Backdrop movies={movies} scrollX={backdropAnimated} />
      <StatusBar hidden />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={item => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{alignItems: 'center'}}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        // onScroll={Animated.event(
        //   [{nativeEvent: {contentOffset: {x: scrollX}}}],
        //   {useNativeDriver: false},
        // )}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
            listener: event => {
              backdropAnimated.setValue(event.nativeEvent.contentOffset.x);
            },
          },
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          if (!item.poster) {
            return <View style={{width: EMPTY_ITEM_SIZE}} />;
          }
          // console.log('item: ', item);
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [100, 50, 100],
            extrapolate: 'clamp',
          });

          // return (
          //   <View style={{width: ITEM_SIZE}}>
          //     <Animated.View
          //       style={{
          //         marginHorizontal: SPACING,
          //         padding: SPACING * 2,
          //         alignItems: 'center',
          //         transform: [{translateY}],
          //         backgroundColor: 'white',
          //         borderRadius: 34,
          //         shadowColor: '#000',
          //         shadowRadius: 3,
          //         shadowOffset: {height: 2, width: 2},
          //         shadowOpacity: 0.1,
          //         elevation: 10,
          //       }}>
          //       <Image source={{uri: item.poster}} style={styles.posterImage} />
          //       <Text style={{fontSize: 24}} numberOfLines={1}>
          //         {item.title}
          //       </Text>
          //       <Rating rating={item.rating} />
          //       <Genres genres={item.genres} />
          //       <Text style={{fontSize: 12}} numberOfLines={3}>
          //         {item.description}
          //       </Text>
          //     </Animated.View>
          //   </View>
          // );
          return (
            <TouchableWithoutFeedback
              onPress={() => {
                console.log('item: ', item);
                navigation.navigate('MoviesListDetails', {
                  item,
                  prevImage: movies[index - 1]?.poster,
                  nextImage: movies[index + 1]?.poster,
                });
              }}>
              <View style={{width: ITEM_SIZE}}>
                <Animated.View
                  style={{
                    marginHorizontal: SPACING,
                    padding: SPACING * 2,
                    alignItems: 'center',
                    transform: [{translateY}],
                    borderRadius: 34,
                  }}>
                  <SharedElement
                    id={`item.${item.key}.backdrop`}
                    style={[StyleSheet.absoluteFillObject]}>
                    <Animated.View
                      style={[
                        StyleSheet.absoluteFillObject,
                        {
                          backgroundColor: 'white',
                          borderRadius: 34,
                        },
                      ]}
                    />
                  </SharedElement>
                  <SharedElement
                    id={`item.${item.key}.image`}
                    style={styles.posterImage}>
                    <Image
                      source={{uri: item.poster}}
                      style={styles.posterImage}
                    />
                  </SharedElement>
                  <SharedElement id={`item.${item.key}.meta`}>
                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={{fontSize: 24}}
                        numberOfLines={1}
                        adjustsFontSizeToFit>
                        {item.title}
                      </Text>
                      <Rating rating={item.rating} />
                      <Genres genres={item.genres} />
                    </View>
                  </SharedElement>
                </Animated.View>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
