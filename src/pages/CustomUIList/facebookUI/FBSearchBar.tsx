import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  Image,
  TouchableHighlight,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated, {Easing} from 'react-native-reanimated';

Icon.loadFont();

const {Value, timing} = Animated;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const FBSearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [keyword, setKeyword] = useState('');

  const inputRef = useRef<TextInput>(null);

  const inputBoxTranslateX = new Value(width);
  const backButtonOpacity = new Value(0);
  const contentTranslateY = new Value(height);
  const contentOpacity = new Value(0);

  const onFocus = () => {
    console.log('onFocus');
    setIsFocused(true);

    const inputBoxTranslateXConfig = {
      duration: 2000,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const backButtonOpacityConfig = {
      duration: 2000,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    const contentTranslateYConfig = {
      duration: 0,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const contentOpacityConfig = {
      duration: 2000,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    };

    timing(inputBoxTranslateX, inputBoxTranslateXConfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();
    timing(contentTranslateY, contentTranslateYConfig).start();
    timing(contentOpacity, contentOpacityConfig).start();

    // force focus
    inputRef.current.focus();
  };

  const onBlur = useCallback(() => {
    setIsFocused(false);
    const inputBoxTranslateXConfig = {
      duration: 200,
      toValue: width,
      easing: Easing.inOut(Easing.ease),
    };

    const backButtonOpacityConfig = {
      duration: 50,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    const contentTranslateYConfig = {
      duration: 0,
      toValue: height,
      easing: Easing.inOut(Easing.ease),
    };

    const contentOpacityConfig = {
      duration: 200,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    };

    timing(inputBoxTranslateX, inputBoxTranslateXConfig).start();
    timing(backButtonOpacity, backButtonOpacityConfig).start();
    timing(contentTranslateY, contentTranslateYConfig).start();
    timing(contentOpacity, contentOpacityConfig).start();

    // force focus
    inputRef.current.blur();
  }, [
    backButtonOpacity,
    contentOpacity,
    contentTranslateY,
    inputBoxTranslateX,
  ]);,

  const onChangeKeyWord = useCallback(
    (text) => {
      setKeyword(text);
    },
    [keyword],
  );

  return (
    <>
      <SafeAreaView style={styles.headerSafeArea}>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <View>
              <Image
                source={require('../../../assets/images/facebookIcon.png')}
                style={{width: 152, height: 30}}
              />
            </View>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor={'#ccd0d5'}
              onPress={onFocus}
              style={styles.searchIconBox}>
              <Icon name="search" size={22} color="#000" />
            </TouchableHighlight>
            <Animated.View
              style={[
                styles.inputBox,
                {transform: [{translateX: inputBoxTranslateX}]},
              ]}>
              <Animated.View style={{opacity: backButtonOpacity}}>
                <TouchableHighlight
                  activeOpacity={1}
                  underlayColor={'#ccd0d5'}
                  onPress={onBlur}
                  style={styles.backIconBox}>
                  <Icon name="chevron-left" size={22} color="#000" />
                </TouchableHighlight>
              </Animated.View>
              <TextInput
                ref={inputRef}
                placeholder="Search Facebook"
                clearButtonMode="always"
                value={keyword}
                onChangeText={onChangeKeyWord}
                style={styles.input}
              />
            </Animated.View>
          </View>
        </View>
      </SafeAreaView>

      <Animated.View
        style={[
          styles.content,
          {
            opacity: contentOpacity,
            transform: [{translateY: contentTranslateY}],
          },
        ]}>
        <SafeAreaView style={styles.contentSafeArea}>
          <View style={styles.contentInner}>
            <View style={styles.separator} />
            {keyword === '' ? (
              <View style={styles.imagePlaceholderContainer}>
                <Text style={styles.imagePlaceholderText}>
                  Enter a few words{'\n'}
                  to search on Facebook
                </Text>
              </View>
            ) : (
              <ScrollView>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 1</Text>
                </View>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 2</Text>
                </View>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 3</Text>
                </View>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 4</Text>
                </View>
                <View style={styles.searchItem}>
                  <Icon
                    style={styles.itemIcon}
                    name="search"
                    size={16}
                    color="#cccccc"
                  />
                  <Text>Fake result 5</Text>
                </View>
              </ScrollView>
            )}
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  headerSafeArea: {
    zIndex: 1000,
  },
  header: {
    height: 50,
    paddingHorizontal: 16,
  },
  headerInner: {
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  backButton: {},
  searchIconBox: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: '#e4e6eb',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputBox: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: width - 32,
  },
  backIconBox: {
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: '#e4e6eb',
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 15,
  },
  content: {
    width: width,
    height: height,
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 999,
  },
  contentSafeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentInner: {
    flex: 1,
    paddingTop: 50,
  },
  separator: {
    marginTop: 5,
    height: 1,
    backgroundColor: '#e6e4eb',
  },
  imagePlaceholderContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '-50%',
  },
  imagePlaceholder: {
    width: 150,
    height: 113,
    alignSelf: 'center',
  },
  imagePlaceholderText: {
    textAlign: 'center',
    color: 'gray',
    marginTop: 5,
  },
  searchItem: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e4eb',
    marginLeft: 16,
  },
  itemIcon: {
    marginRight: 15,
  },
});

export default FBSearchBar;
