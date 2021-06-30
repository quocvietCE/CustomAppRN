import React, {useCallback} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

import styles from '../navigatePage/style.ts';

const ChartListNavigation = ({navigation}) => {
  const navigateToCustomBottomTab = useCallback(() => {
    navigation.navigate('CustomBottomTab');
  }, [navigation]);

  const navigateToCustomButton = useCallback(() => {
    navigation.navigate('CustomButton');
  }, [navigation]);

  const navigateToNeumorphismMusicUI = useCallback(() => {
    navigation.navigate('NeumorphismMusicUI');
  }, [navigation]);

  const navigateToStarRatingsAnimation = useCallback(() => {
    navigation.navigate('StarRatingsAnimation');
  }, [navigation]);

  const navigateToProfileScreenUI = useCallback(() => {
    navigation.navigate('ProfileScreenUI');
  }, [navigation]);

  const navigateToSwipeDelete = useCallback(() => {
    navigation.navigate('SwipeDelete');
  }, [navigation]);

  const navigateToFacebookUI = useCallback(() => {
    navigation.navigate('FacebookUI');
  }, [navigation]);

  const navigateToFloatingHeart = useCallback(() => {
    navigation.navigate('FloatingHeart');
  }, [navigation]);

  const navigateToAccordionMenu = useCallback(() => {
    navigation.navigate('AccordionMenu');
  }, [navigation]);

  const navigateToAnimatedTabIndicator = useCallback(() => {
    navigation.navigate('AnimatedTabIndicator');
  }, [navigation]);

  const navigateToOnBoardScreen = useCallback(() => {
    navigation.navigate('OnBoardScreen');
  }, [navigation]);

  const navigateToOnBoardScreen2 = useCallback(() => {
    navigation.navigate('OnBoardScreen2');
  }, [navigation]);

  const navigateToScrollHeaderAnimation = useCallback(() => {
    navigation.navigate('ScrollHeaderAnimation');
  }, [navigation]);

  const navigateToScrollingBottomActions = useCallback(() => {
    navigation.navigate('ScrollingBottomActions');
  }, [navigation]);

  const navigateToHistoryCall = useCallback(() => {
    navigation.navigate('HistoryCall');
  }, [navigation]);

  const navigateToCardImage = useCallback(() => {
    navigation.navigate('CardImage');
  }, [navigation]);

  const navigateToSynchronisedFlatlist = useCallback(() => {
    navigation.navigate('SynchronisedFlatList');
  }, [navigation]);

  const navigateToGalleryView = useCallback(() => {
    navigation.navigate('GalleryView');
  }, [navigation]);

  const navigateToCardImageWormPage = useCallback(() => {
    navigation.navigate('CardImageWormPage');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Custom UI List Navigation</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCustomBottomTab}>
          <Text style={styles.title}>Custom Bottom Tab</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCustomButton}>
          <Text style={styles.title}>Custom Button</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToNeumorphismMusicUI}>
          <Text style={styles.title}>Neumorphism Music UI</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToStarRatingsAnimation}>
          <Text style={styles.title}>Star Ratings Animation</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToProfileScreenUI}>
          <Text style={styles.title}>Profile Screen UI</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToSwipeDelete}>
          <Text style={styles.title}>Swipe Delete</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToFacebookUI}>
          <Text style={styles.title}>Facebook UI</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFloatingHeart}>
          <Text style={styles.title}>Floating Heart Animated</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAccordionMenu}>
          <Text style={styles.title}>Accordion Menu</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAnimatedTabIndicator}>
          <Text style={styles.title}>Animated Tabs Indicator</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToOnBoardScreen}>
          <Text style={styles.title}>OnBoard Screen</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToOnBoardScreen2}>
          <Text style={styles.title}>OnBoard Screen 2</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToScrollHeaderAnimation}>
          <Text style={styles.title}>Scroll Header Animation</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToScrollingBottomActions}>
          <Text style={styles.title}>Scrolling Bottom Actions</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToHistoryCall}>
          <Text style={styles.title}>History Call</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToCardImage}>
          <Text style={styles.title}>Card Image</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSynchronisedFlatlist}>
          <Text style={styles.title}>Synchronised Flatlist</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToGalleryView}>
          <Text style={styles.title}>Gallery view - Synced FlatLists</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCardImageWormPage}>
          <Text style={styles.title}>Card Image Worm Page</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ChartListNavigation;
