import * as React from 'react';
import {StatusBar, Alert, Animated, Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {State, TapGestureHandler} from 'react-native-gesture-handler';

const DURATION = 1000;

export default function LongPressButtonAnimation() {
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const reactiveAnimated = React.useRef(new Animated.Value(0)).current;
  const reactAnimated = React.useRef(new Animated.Value(0)).current;
  const buttonRef = React.useRef();
  const [width, setWidth] = React.useState(1000);
  let date = 0;

  const animation = (toValue) => {
    return Animated.timing(animatedValue, {
      toValue,
      duration: DURATION,
      useNativeDriver: true,
    });
  };
  const toggleHeldComplete = () => {
    return Animated.timing(reactAnimated, {
      toValue: reactiveAnimated,
      duration: 300,
      useNativeDriver: true,
    });
  };

  React.useEffect(() => {
    toggleHeldComplete().start();
  }, []);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, 0],
  });

  return (
    <>
      <TapGestureHandler
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.BEGAN) {
            // Set the date, this is tricky because we don't know from
            // reactive animation when it finished and I couldn't use it :(
            date = Date.now();
            animation(1).start(() => {
              if (Date.now() - date >= DURATION) {
                reactiveAnimated.setValue(1);
              }
            });
          } else {
            reactiveAnimated.setValue(0);
            animation(0).start();
          }
        }}>
        <View
          style={styles.button}
          onLayout={(ev) => {
            setWidth(ev.nativeEvent.layout.width);
          }}>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              styles.overlay,
              {zIndex: 0, opacity: animatedValue, transform: [{translateX}]},
            ]}
          />
          <Text
            style={{
              zIndex: 1,
              textAlign: 'center',
              textTransform: 'uppercase',
              fontWeight: '900',
              fontSize: 14,
              color: '#333',
            }}>
            Awesome button for sAINT
          </Text>
        </View>
      </TapGestureHandler>
      <Animated.Text
        style={{
          opacity: reactAnimated,
          marginTop: 10,
          fontSize: 12,
          color: '#333',
        }}>
        You held it long enought to fire the action!
      </Animated.Text>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 8,
  },
  overlay: {
    backgroundColor: 'gold',
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   paddingTop: Constants.statusBarHeight,
  //   backgroundColor: '#ecf0f1',
  //   padding: 8,
  // },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
