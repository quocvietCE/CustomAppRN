import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

AntDesign.loadFont();

const {height} = Dimensions.get('window');

const animationEndY = Math.ceil(height * 0.7);
const negativeEndY = animationEndY * -1;

let heartCount = 1;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return `rgb(${getRandomNumber(100, 144)}, ${getRandomNumber(
    10,
    200,
  )}, ${getRandomNumber(200, 244)})`;
}

export default class App extends React.Component {
  state = {
    hearts: [],
  };

  addHeart = () => {
    this.setState(
      {
        hearts: [
          ...this.state.hearts,
          {
            id: heartCount,
            right: getRandomNumber(20, 150),
            color: getRandomColor(),
          },
        ],
      },
      () => {
        heartCount++;
      },
    );
  };

  removeHeart = (id) => {
    this.setState({
      hearts: this.state.hearts.filter((heart) => {
        return heart.id !== id;
      }),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          {this.state.hearts.map((heart) => {
            return (
              <HeartContainer
                key={heart.id}
                style={{right: heart.right}}
                onComplete={() => this.removeHeart(heart.id)}
                color={heart.color}
              />
            );
          })}
        </View>
        <TouchableOpacity onPress={this.addHeart} style={styles.addButton}>
          <AntDesign name="plus" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}

class HeartContainer extends React.Component {
  constructor() {
    super();

    this.yAnimation = this.state.position.interpolate({
      inputRange: [negativeEndY, 0],
      outputRange: [animationEndY, 0],
    });

    this.opacityAnimation = this.yAnimation.interpolate({
      inputRange: [0, animationEndY],
      outputRange: [1, 0],
    });

    this.scaleAnimation = this.yAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.4, 1],
      extrapolate: 'clamp',
    });

    this.xAnimation = this.yAnimation.interpolate({
      inputRange: [
        0,
        animationEndY / 6,
        animationEndY / 3,
        animationEndY / 2,
        animationEndY,
      ],
      outputRange: [0, 25, 15, 0, 10],
    });

    this.rotateAnimation = this.yAnimation.interpolate({
      inputRange: [
        0,
        animationEndY / 6,
        animationEndY / 3,
        animationEndY / 2,
        animationEndY,
      ],
      outputRange: ['0deg', '-5deg', '0deg', '5deg', '0deg'],
    });
  }

  state = {
    position: new Animated.Value(0),
  };

  static defaultProps = {
    onComplete() {},
  };

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: negativeEndY,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(this.props.onComplete);
  }

  getHeartStyle() {
    return {
      transform: [
        {translateY: this.state.position},
        {scale: this.scaleAnimation},
        {translateX: this.xAnimation},
        {rotate: this.rotateAnimation},
      ],
      opacity: this.opacityAnimation,
    };
  }

  render() {
    return (
      <Animated.View
        style={[styles.heartContainer, this.getHeartStyle(), this.props.style]}>
        <Heart color={this.props.color} />
      </Animated.View>
    );
  }
}

const Heart = (props) => (
  <View {...props} style={[styles.heart, props.style]}>
    <AntDesign name="heart" size={48} color={props.color} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#378AD9',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 32,
    left: 32,
  },
  heartContainer: {
    position: 'absolute',
    bottom: 30,
    backgroundColor: 'transparent',
  },
  heart: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});
