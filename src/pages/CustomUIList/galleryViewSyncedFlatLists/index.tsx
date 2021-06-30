import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import styles from './style';

const API_KEY = '563492ad6f917000010000015e0ecff0ffa84e9093e6f848376cde89';
const API_URL =
  'https://api.pexels.com/v1/search?query=nature&orientation=portrait&size=small&per_page=20';
const IMAGE_SIZE = 80;
const SPACING = 10;

const fetchImagesFromPexels = async () => {
  const data = await fetch(API_URL, {
    headers: {
      Authorization: API_KEY,
    },
  });

  const results = await data.json();

  console.log('results: ', results);

  return results.photos;
};

const GalleryView = () => {
  const [images, setImages] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const topRef = React.useRef();
  const thumbRef = React.useRef();

  React.useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchImagesFromPexels();
      setImages(images);
    };

    fetchImages();
  }, []);

  // const _scrollX = useRef(new Animated.Value(0)).current;
  // const _progress = Animated.modulo(Animated.divide(_scrollX, width), width);
  // const [index, setIndex] = useState(0);
  // const ref = useRef();

  const scrollToActiveIndex = (index) => {
    setActiveIndex(index);
    // scroll flatlists
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };

  if (!images) {
    return <Text>Loading ...</Text>;
  }
  // console.log('images: ', images);
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        // bounces={false}
        ref={topRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width),
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => {
          console.log('item: ', item);
          return (
            <View style={{width, height}}>
              <Image
                source={{uri: item.src.portrait}}
                style={[StyleSheet.absoluteFillObject]}
              />
            </View>
          );
        }}
      />
      <FlatList
        data={images}
        horizontal
        ref={thumbRef}
        // bounces={false}
        showsHorizontalScrollIndicator={false}
        // pagingEnabled
        style={{
          position: 'absolute',
          bottom: IMAGE_SIZE,
          // backgroundColor: 'red',
        }}
        contentContainerStyle={{paddingHorizontal: SPACING}}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => {
          console.log('item: ', item);
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{uri: item.src.portrait}}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderColor: index === activeIndex ? '#fff' : 'transparent',
                  borderRadius: 12,
                  marginRight: SPACING,
                  borderWidth: 2,
                }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GalleryView;
