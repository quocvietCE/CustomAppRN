// Import react
import React from 'react';

// Import react-native components
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

// Import react-native-vector-icons
// from "https://github.com/oblador/react-native-vector-icons"
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();
// Import react-native-reanimated
// from "https://github.com/software-mansion/react-native-reanimated"
import Animated, {Easing} from 'react-native-reanimated';
const {Value, timing} = Animated;

// Declare component
class FBStoriesList extends React.Component {
  constructor(props) {
    super(props);

    this.scroll_x = new Value(0);
  }

  render() {
    // personal card container
    const _card_width = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 50],
      extrapolate: 'clamp',
    });
    const _card_height = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [170, 50],
      extrapolate: 'clamp',
    });
    const _card_position_top = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 60],
      extrapolate: 'clamp',
    });
    const _card_position_left = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [10, 0],
      extrapolate: 'clamp',
    });
    const _card_border_left_radius = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [16, 0],
      extrapolate: 'clamp',
    });

    // image container
    const _image_container_height = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [100, 40],
      extrapolate: 'clamp',
    });
    const _image_container_margin = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 4],
      extrapolate: 'clamp',
    });
    const _image_container_border_radius = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 40],
      extrapolate: 'clamp',
    });

    // cta container
    const _cta_container_padding_top = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [20, -20],
      extrapolate: 'clamp',
    });
    const _cta_container_opacity = this.scroll_x.interpolate({
      inputRange: [0, 50],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    // icon
    const _icon_scale = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0.6],
      extrapolate: 'clamp',
    });
    const _icon_position_top = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [-15, -28],
      extrapolate: 'clamp',
    });
    const _icon_position_right = this.scroll_x.interpolate({
      inputRange: [0, 100],
      outputRange: [33, -3],
      extrapolate: 'clamp',
    });

    return (
      <>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.personal_card_container,
              {
                width: _card_width,
                height: _card_height,
                top: _card_position_top,
                left: _card_position_left,
                borderTopLeftRadius: _card_border_left_radius,
                borderBottomLeftRadius: _card_border_left_radius,
              },
            ]}>
            {/* Image container */}
            <Animated.View
              style={[
                styles.image_container,
                {
                  height: _image_container_height,
                  margin: _image_container_margin,
                  borderRadius: _image_container_border_radius,
                },
              ]}>
              <Image
                source={require('../../../assets/images/avatar.jpg')}
                style={styles.image}
              />
            </Animated.View>
            {/* Call to action */}
            <Animated.View style={styles.cta_container}>
              <Animated.Text
                style={[
                  styles.text,
                  {
                    paddingTop: _cta_container_padding_top,
                    opacity: _cta_container_opacity,
                  },
                ]}>
                Create a{'\n'}
                story
              </Animated.Text>
              {/* Icon */}
              <Animated.View
                style={[
                  styles.icon_container,
                  {
                    transform: [{scale: _icon_scale}],
                    top: _icon_position_top,
                    right: _icon_position_right,
                  },
                ]}>
                <Icon name="plus" size={18} color="#ffffff" />
              </Animated.View>
            </Animated.View>
          </Animated.View>
          <Animated.ScrollView
            style={styles.scroll_view}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={5}
            onScroll={Animated.event([
              {
                nativeEvent: {contentOffset: {x: this.scroll_x}},
              },
            ])}>
            <View style={styles.fake_card_ghost} />
            <View style={styles.fake_card} />
            <View style={styles.fake_card} />
            <View style={styles.fake_card} />
            <View style={styles.fake_card} />
            <View style={styles.column_spacer} />
          </Animated.ScrollView>
        </View>
      </>
    );
  }
}

export default FBStoriesList;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  personal_card_container: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    zIndex: 10,
    elevation: 10,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  image_container: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  cta_container: {
    position: 'relative',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  icon_container: {
    width: 32,
    height: 32,
    borderRadius: 32,
    backgroundColor: '#3578E5',
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll_view: {
    flexDirection: 'row',
  },
  fake_card: {
    width: 100,
    height: 170,
    backgroundColor: '#dddddd',
    marginLeft: 5,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 16,
  },
  fake_card_ghost: {
    backgroundColor: 'white',
    marginLeft: 10,
    borderWidth: 0,
    width: 100,
    height: 170,
  },
  column_spacer: {
    width: 10,
    height: 170,
  },
});
