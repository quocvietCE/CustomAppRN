import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  Easing,
  Animated,
  Image,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import data, {detailsList, iconByType} from './data';
import {Transition, Transitioning} from 'react-native-reanimated';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {
  FlingGestureHandler,
  Directions,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';

SimpleLineIcons.loadFont();
const {width, height} = Dimensions.get('window');
const TITLE_SIZE = 56;
const SPACING = 80;
const DURATION = 700;
const IMAGE_SIZE = width * 0.8;

const colors = {
  lightBg: '#F2F2F2',
  darkBg: '#2C2D51',
  lightText: '#E5E5DD',
  darkText: '#A5A6AA',
};

const Item = ({children, style}) => {
  return (
    <View
      style={[
        {
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: 'transparent',
        },
        style,
      ]}>
      {children}
    </View>
  );
};

const Icon = ({type}) => {
  return (
    <SimpleLineIcons
      name={type}
      size={26}
      color="#A5A6AA"
      style={{marginRight: 15, height: 26}}
    />
  );
};

const Title = ({
  index,
  text,
  color,
}: {
  index: number;
  text: string;
  color: string;
}) => {
  return (
    <Item style={{height: TITLE_SIZE * 3, justifyContent: 'flex-end'}}>
      <Text
        key={`title-${index}`}
        style={{fontSize: TITLE_SIZE, fontWeight: '900', color}}>
        {text}
      </Text>
    </Item>
  );
};

const Details = ({color, index}) => {
  return (
    <View style={{marginVertical: SPACING}}>
      {detailsList.map((key) => {
        return (
          <View
            key={key}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 25,
            }}>
            <Icon type={iconByType[key]} />
            <Item style={{flex: 1, height: 26, justifyContent: 'center'}}>
              <Text
                key={`${key}-${index}`}
                style={{fontSize: 16, color, fontWeight: '700'}}>
                {data[index][key]}
              </Text>
            </Item>
          </View>
        );
      })}
    </View>
  );
};

const Description = ({index, text, color}) => {
  return (
    <Item>
      <Text key={`description-${index}`} style={{fontSize: 16, color}}>
        {text}
      </Text>
    </Item>
  );
};

const transition = (
  <Transition.Together>
    <Transition.Out
      type="slide-bottom"
      durationMs={DURATION}
      interpolation="easeIn"
    />
    <Transition.Change />
    <Transition.In
      type="slide-bottom"
      durationMs={DURATION}
      interpolation="easeOut"
    />
  </Transition.Together>
);

const MenuCookingQuest = () => {
  const [index, setIndex] = React.useState(0);
  const color = index % 2 === 1 ? colors.lightText : colors.darkText;
  const headingColor = index % 2 === 1 ? colors.lightText : colors.darkBg;
  const activeIndex = React.useRef(new Animated.Value(0)).current;
  const animation = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: activeIndex,
      duration: DURATION,
      useNativeDriver: true,
    }).start();
  });

  const setActiveIndex = React.useCallback((newIndex) => {
    activeIndex.setValue(newIndex);
    ref.current.animatedNextTransition();
    setIndex(newIndex);
  });

  const translateY = animation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [height, 0, -height],
  });

  const ref = React.useRef();

  return (
    <FlingGestureHandler
      key="up"
      direction={Directions.UP}
      onHandlerStateChange={(ev) => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="down"
        direction={Directions.DOWN}
        onHandlerStateChange={(ev) => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}>
        <SafeAreaView style={styles.container}>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {height: height * data.length},
              {transform: [{translateY}]},
            ]}>
            {data.map((_, i) => {
              return (
                <View
                  key={i}
                  style={{
                    height,
                    backgroundColor:
                      i % 2 === 0 ? colors.lightBg : colors.darkBg,
                  }}
                />
              );
            })}
          </Animated.View>
          <View
            style={[
              styles.imageContainer,
              {borderColor: index % 2 === 0 ? colors.darkBg : colors.lightBg},
            ]}>
            <Image source={{uri: data[index].image}} style={styles.image} />
          </View>
          <Transitioning.View
            ref={ref}
            transition={transition}
            style={{padding: 20, flex: 1, justifyContent: 'space-evenly'}}>
            <Title
              color={headingColor}
              index={index}
              text={data[index].title}
            />
            <Details color={color} index={index} />
            <Description
              index={index}
              text={data[index].description}
              color={headingColor}
            />
          </Transitioning.View>
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageContainer: {},
  image: {},
});

export default MenuCookingQuest;
