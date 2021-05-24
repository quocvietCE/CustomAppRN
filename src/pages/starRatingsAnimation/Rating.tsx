import React from 'react';
import {View, TouchableWithoutFeedback, Animated, Easing} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Rating extends React.Component {
  state = {
    rating: this.props.rating,
    animation: new Animated.Value(1),
    numStars: this.props.numStars,
    starColor: this.props.starColor,
  };

  rate = (star) => {
    this.setState({rating: star});
  };

  animate = () => {
    Animated.timing(this.state.animation, {
      toValue: 2,
      duration: 400,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      this.state.animation.setValue(1);
    });
  };

  render() {
    console.log('this.props: ', this.props);
    let stars = [];

    const animateScale = this.state.animation.interpolate({
      inputRange: [1, 1.5, 2],
      outputRange: [1, 1.4, 1],
    });

    const animateOpacity = this.state.animation.interpolate({
      inputRange: [1, 1.2, 2],
      outputRange: [1, 0.5, 1],
    });

    const animateWobble = this.state.animation.interpolate({
      inputRange: [1, 1.25, 1.75, 2],
      outputRange: ['0deg', '-3deg', '3deg', '0deg'],
    });

    const animationStyle = {
      transform: [{scale: animateScale}, {rotate: animateWobble}],
      opacity: animateOpacity,
    };

    for (let x = 1; x <= this.state.numStars; x++) {
      stars.push(
        <TouchableWithoutFeedback
          key={x}
          onPress={() => {
            this.rate(x), this.animate();
          }}>
          <Animated.View style={x <= this.state.rating ? animationStyle : ''}>
            <Star
              filled={x <= this.state.rating ? true : false}
              color={this.state.starColor}
            />
          </Animated.View>
        </TouchableWithoutFeedback>,
      );
    }

    return (
      <View>
        <View style={{flexDirection: 'row'}}>{stars}</View>
      </View>
    );
  }
}

export default Rating;

class Star extends React.Component {
  render() {
    return (
      <FontAwesome
        name={this.props.filled === true ? 'star' : 'star-o'}
        color={this.props.color}
        size={32}
        style={{marginHorizontal: 6}}
      />
    );
  }
}
