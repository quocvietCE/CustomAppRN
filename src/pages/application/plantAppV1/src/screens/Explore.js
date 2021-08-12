import React, {useState, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';

import {Button, Input, Block, Text} from '../components';
import mocks from '../constants/mocksData';
import theme from '../constants/theme';

FontAwesome.loadFont();

const {width, height} = Dimensions.get('window');

const Explore = ({images = mocks.explore, navigation}) => {
  const [searchString, setSearchString] = useState(null);
  // const [searchFocus, setSearchFocus] = useState();
  const searchFocus = useRef(new Animated.Value(0.6)).current;

  const handleSearchFocus = (status) => {
    Animated.timing(searchFocus, {
      toValue: status ? 0.8 : 0.6, // status === true, increase flex size
      duration: 150, // ms
      useNativeDriver: false,
    }).start();
  };

  const renderSearch = () => {
    const isEditing = searchFocus && searchString;

    return (
      <Block
        animated
        middle
        flex={searchFocus}
        style={[
          styles.search,
          {
            transform: [
              {
                translateY: searchFocus,
              },
            ],
          },
        ]}>
        <Input
          placeholder="Search"
          placeholderTextColor={theme.colors.gray2}
          style={styles.searchInput}
          onFocus={() => handleSearchFocus(true)}
          onBlur={() => handleSearchFocus(false)}
          onChangeText={(text) => setSearchString(text)}
          value={searchString}
          onRightPress={() => (isEditing ? setSearchString(null) : null)}
          rightStyle={styles.searchRight}
          rightLabel={
            <FontAwesome
              name={isEditing ? 'close' : 'search'}
              size={theme.sizes.base}
              color={theme.colors.gray2}
              style={styles.searchIcon}
            />
          }
        />
      </Block>
    );
  };

  const renderImage = (img, index) => {
    const sizes = Image.resolveAssetSource(img);
    const fullWidth = width - theme.sizes.padding * 2.5;
    const resize = (sizes.width * 100) / fullWidth;
    const imgWidth = resize > 75 ? fullWidth : sizes.width * 1;

    return (
      <TouchableOpacity
        key={`img-${index}`}
        onPress={() => navigation.navigate('Product')}>
        <Image
          source={img}
          style={[styles.image, {minWidth: imgWidth, maxWidth: imgWidth}]}
        />
      </TouchableOpacity>
    );
  };

  const renderExplore = () => {
    const mainImage = images[0];

    return (
      <Block style={{marginBottom: height / 3}}>
        <TouchableOpacity
          style={[styles.image, styles.mainImage]}
          onPress={() => navigation.navigate('Product')}>
          <Image source={mainImage} style={[styles.image, styles.mainImage]} />
        </TouchableOpacity>
        <Block row space="between" wrap>
          {images.slice(1).map((img, index) => renderImage(img, index))}
        </Block>
      </Block>
    );
  };

  const renderFooter = () => {
    return (
      <LinearGradient
        locations={[0.5, 1]}
        style={styles.footer}
        colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0.6)']}>
        <Button gradient style={{width: width / 2.678}}>
          <Text bold white center>
            Filter
          </Text>
        </Button>
      </LinearGradient>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Block flex={false} row center space="between" style={styles.header}>
        <Text h1 bold>
          Explore
        </Text>
        {renderSearch()}
      </Block>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.explore}>
        {renderExplore()}
      </ScrollView>

      {renderFooter()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base * 2,
  },
  search: {
    height: theme.sizes.base * 2,
    width: width - theme.sizes.base * 2,
    marginTop: 5,
  },
  searchInput: {
    fontSize: theme.sizes.caption,
    height: theme.sizes.base * 2.5,
    backgroundColor: 'rgba(142, 142, 147, 0.06)',
    borderColor: 'rgba(142, 142, 147, 0.06)',
    paddingLeft: theme.sizes.base / 1.333,
    paddingRight: theme.sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    position: 'absolute',
    right: theme.sizes.base / 1.333,
    top: theme.sizes.base / 1.6,
  },
  explore: {
    marginHorizontal: theme.sizes.padding * 1.25,
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - theme.sizes.padding * 2.5,
    marginBottom: theme.sizes.base,
    borderRadius: 4,
  },
  mainImage: {
    minWidth: width - theme.sizes.padding * 2.5,
    minHeight: width - theme.sizes.padding * 2.5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.1,
    width,
    paddingBottom: theme.sizes.base * 4,
  },
});

export default Explore;
