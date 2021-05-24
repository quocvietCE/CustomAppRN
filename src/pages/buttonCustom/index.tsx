import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated as AnimatedRN,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {PanGestureHandler, RectButton} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LongPressButtonAnimation from '../../components/LongPressButtonAnimation';
import SwipeButton from '../../components/SwipeButton';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  Extrapolate,
  interpolate,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';
import FloatingActionButton from './FloatingActionButton';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont();

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const BUTTON_WIDTH = 350;
const BUTTON_HEIGHT = 100;
const BUTTON_PADDING = 10;
const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;

const AnimatedSwipeButton = ({onToggle}) => {
  // Animated value for X translation
  const X = useSharedValue(0);

  // Toggled State
  const [toggled, setToggled] = useState(false);

  // Fires when animation ends
  const handleComplete = (isToggled) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
      // onToggle(isToggled);
    }
  };

  // Gesture Handler Events
  const animatedGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.completed = toggled;
    },
    onActive: (e, ctx) => {
      let newValue;
      // X.value = e.translationX;
      if (ctx.completed) {
        newValue = H_SWIPE_RANGE + e.translationX;
      } else {
        newValue = e.translationX;
      }

      if (newValue >= 0 && newValue <= H_SWIPE_RANGE) {
        X.value = newValue;
      }
    },
    onEnd: () => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    },
  });
  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeCont: useAnimatedStyle(() => {
      return {};
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + X.value,
        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS - BUTTON_PADDING],
          ['#06d6a0', '#fff'],
        ),
        transform: [{translateX: X.value}],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.7, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }),
  };

  return (
    <Animated.View style={[styles.swipeCont, AnimatedStyles.swipeCont]}>
      <AnimatedLinearGradient
        style={[AnimatedStyles.colorWave, styles.colorWave]}
        colors={['#06d6a0', '#1b9aaa']}
        start={{x: 0.0, y: 0.5}}
        end={{x: 1, y: 0.5}}
      />
      <PanGestureHandler onGestureEvent={animatedGestureHandler}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} />
      </PanGestureHandler>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText]}>
        Swipe Me
      </Animated.Text>
    </Animated.View>
  );
};

const ChatItem = () => {
  const renderRightAction = (icon, color, backgroundColor, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    return (
      <AnimatedRN.View style={{flex: 1, transform: [{translateX: trans}]}}>
        <RectButton style={[styles.rightAction, {backgroundColor}]}>
          <Icon name={icon} size={30} color={color} />
        </RectButton>
      </AnimatedRN.View>
    );
  };

  const renderRightActions = (progress) => {
    console.log('renderRightActions progress: ', progress);
    return (
      <View style={{width: 192, flexDirection: 'row'}}>
        {renderRightAction('menu', '#000', '#eee', 192, progress)}
        {renderRightAction('bell', '#000', '#ccc', 128, progress)}
        {renderRightAction('delete', '#fff', '#dd2c00', 64, progress)}
      </View>
    );
  };

  const leftSwipe = (progress, dragX) => {
    console.log('leftSwipe dragX: ', dragX);
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        // onPress={props.handleDelete}
        activeOpacity={0.6}
        style={{backgroundColor: 'red'}}>
        <View style={styles.deleteBox}>
          <AnimatedRN.Text style={{transform: [{scale: scale}]}}>
            Delete
          </AnimatedRN.Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable
      // ref={updateRef}
      friction={2}
      containerStyle={{
        backgroundColor: 'white',
        borderRadius: 6,
      }}
      rightThreshold={40}
      renderLeftActions={leftSwipe}
      renderRightActions={renderRightActions}>
      <View style={styles.item}>
        <Image
          source={require('../../assets/images/avatar.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>Nguyen Quoc Viet</Text>
          <Text style={styles.message}>Hello World</Text>
        </View>
      </View>
    </Swipeable>
  );
};

const ButtonCustom = () => {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = (value) => setToggleState(value);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleButton}>Long Press Button Animation</Text>
      <LongPressButtonAnimation />
      <Text style={styles.titleButton}>Animated Swipe Button</Text>
      <AnimatedSwipeButton onToggle={handleToggle} />
      <SwipeButton onToggle={handleToggle} />

      <Text style={[styles.titleButton, {marginVertical: 40}]}>
        Swipe to Delete
      </Text>
      <ChatItem />
      <FloatingActionButton />
    </ScrollView>
  );
};

export default ButtonCustom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
    paddingVertical: 50,
    paddingHorizontal: 10,
  },
  titleButton: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    padding: BUTTON_PADDING,
    backgroundColor: '#fff',
    borderRadius: BUTTON_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    flexDirection: 'row',
  },
  colorWave: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    position: 'absolute',
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    zIndex: 3,
  },
  swipeText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#1b9aaa',
    zIndex: 2,
  },

  item: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  message: {
    color: 'gray',
    fontSize: 14,
    marginTop: 3,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 75,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 75,
  },
});
