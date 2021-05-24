import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {width, height, SPACING} from '../../config/theme';
import UserCard from '../../components/UserCard';
import {SharedElement} from 'react-navigation-shared-element';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import MasonryList from '../../components/MasonryList';

const PhotographyListDetails = ({navigation, route}) => {
  const {item} = route.params;
  const scrollRef = React.useRef();
  let goBackTimeout;
  let hasScrolled = false;
  React.useEffect(() => {
    return () => {
      clearTimeout(goBackTimeout);
      goBackTimeout = undefined;
    };
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <AntDesign
        name="arrowleft"
        size={28}
        style={{
          padding: 12,
          position: 'absolute',
          top: 30,
          left: 20,
          zIndex: 2,
        }}
        color={'#fff'}
        onPress={() => {
          scrollRef.current.scrollTo({y: 0, animated: true});
          setTimeout(
            () => {
              navigation.goBack();
            },
            hasScrolled ? 270 : 0,
          );
        }}
      />
      <SharedElement
        id={`item.${item.key}.image`}
        style={{position: 'absolute', top: 0}}>
        <Image source={{uri: item.image}} style={styles.image} />
      </SharedElement>
      <ScrollView
        onMomentumScrollEnd={(ev) => {
          hasScrolled = ev.nativeEvent.contentOffset.y > 1;
        }}
        ref={scrollRef}
        contentContainerStyle={{alignItems: 'center'}}>
        <SharedElement
          id={`item.${item.key}.card`}
          style={{marginTop: height * 0.4, marginBottom: SPACING * 2}}>
          <UserCard user={item.user} />
        </SharedElement>
        <Animatable.View
          useNativeDriver
          animation="fadeInUp"
          duration={800}
          delay={200}
          style={{flex: 1, backgroundColor: 'rgba(255,255,255,1)'}}>
          <MasonryList />
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

PhotographyListDetails.sharedElements = (route, otherRoute, showing) => {
  const {item} = route.params;
  return [
    {
      id: `item.${item.key}.image`,
    },
    {
      id: `item.${item.key}.card`,
    },
  ];
};

export default PhotographyListDetails;

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height / 2,
    resizeMode: 'cover',
    padding: SPACING * 2,
    paddingBottom: SPACING,
    justifyContent: 'flex-end',
  },
});
