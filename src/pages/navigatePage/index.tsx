import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';

import styles from './style';

const NavigatePage = ({navigation}) => {
  const navigateToHeadPhoneCarousel = useCallback(() => {
    navigation.navigate('HeadphoneCarousel');
  }, [navigation]);

  const navigateToCarousel3D = useCallback(() => {
    navigation.navigate('Carousel3D');
  }, [navigation]);

  const navigateAnimatedTabsAndIndicator = useCallback(() => {
    navigation.navigate('AnimatedTabIndicator');
  }, [navigation]);

  const navigateToOnBoardScreen = useCallback(() => {
    navigation.navigate('OnBoardScreen');
  }, [navigation]);

  const navigateToGalleryView = useCallback(() => {
    navigation.navigate('GalleryView');
  }, [navigation]);

  const navigateToChart = useCallback(() => {
    navigation.navigate('ChartView');
  }, [navigation]);

  const navigateToChartDemo = useCallback(() => {
    navigation.navigate('ChartDemo');
  }, [navigation]);

  const navigateToChartDemo1 = useCallback(() => {
    navigation.navigate('ChartCustom1');
  }, [navigation]);

  const navigateToEventCard = useCallback(() => {
    navigation.navigate('EventCards');
  }, [navigation]);

  const navigateToSegmentedControl = useCallback(() => {
    navigation.navigate('Segmented');
  }, [navigation]);

  const navigateToHistoryCall = useCallback(() => {
    navigation.navigate('HistoryCall');
  }, [navigation]);

  const navigateToCardImage = useCallback(() => {
    navigation.navigate('CardImage');
  }, [navigation]);

  const navigateToScrollAnimation = useCallback(() => {
    navigation.navigate('ScrollAnimation');
  }, [navigation]);

  const navigateToCardImageBackground = useCallback(() => {
    navigation.navigate('CardImageBackground');
  }, [navigation]);

  const navigateToCardImageWormPage = useCallback(() => {
    navigation.navigate('CardImageWormPage');
  }, [navigation]);

  const navigateToCarouselMovie = useCallback(() => {
    navigation.navigate('CarouselMovie');
  }, [navigation]);

  const navigateToListSampleShareElement = useCallback(() => {
    navigation.navigate('ListSampleShareElement');
  }, [navigation]);

  const navigateToZaraProductCarousel = useCallback(() => {
    navigation.navigate('ZaraProductCarousel');
  }, [navigation]);

  const navigateToScrollingBottomActions = useCallback(() => {
    navigation.navigate('ScrollingBottomActions');
  }, [navigation]);

  const navigateToSalonShareElement = useCallback(() => {
    navigation.navigate('SalonShareElement');
  }, [navigation]);

  const navigateToFoodShareElement = useCallback(() => {
    navigation.navigate('FoodShareElement');
  }, [navigation]);

  const navigateToPhotographyShareElement = useCallback(() => {
    navigation.navigate('PhotographyList');
  }, [navigation]);

  const navigateToCarsList = useCallback(() => {
    navigation.navigate('CarsList');
  }, [navigation]);

  const navigateToTravelUpList = useCallback(() => {
    navigation.navigate('TravelUpList');
  }, [navigation]);

  const navigateToTravelList = useCallback(() => {
    navigation.navigate('TravelList');
  }, [navigation]);

  const navigateToTabView = useCallback(() => {
    navigation.navigate('CustomIndicator');
  }, [navigation]);

  const navigateToSynchronisedFlatlist = useCallback(() => {
    navigation.navigate('SynchronisedFlatlists');
  }, [navigation]);

  const navigateToAccordionMenu = useCallback(() => {
    navigation.navigate('AccordionMenu');
  }, [navigation]);

  const navigateToButtonCustom = useCallback(() => {
    navigation.navigate('ButtonCustom');
  }, [navigation]);

  const navigateToSwipeDelete = useCallback(() => {
    navigation.navigate('SwipeDelete');
  }, [navigation]);

  const navigateToUberSwipeToDelete = useCallback(() => {
    navigation.navigate('UberSwipeToDelete');
  }, [navigation]);

  const navigateToFacebook = useCallback(() => {
    navigation.navigate('Facebook');
  }, [navigation]);

  const navigateToOnBoardScreenCarousel = useCallback(() => {
    navigation.navigate('OnboardScreenCarousel');
  }, [navigation]);

  const navigateToFloatingHeart = useCallback(() => {
    navigation.navigate('FloatingHeart');
  }, [navigation]);

  const navigateToProfileScreenUI = useCallback(() => {
    navigation.navigate('ProfileScreenUI');
  }, [navigation]);

  const navigateToBankingApp = useCallback(() => {
    navigation.navigate('BankingApp');
  }, [navigation]);

  const navigateToStarRatingsAnimation = useCallback(() => {
    navigation.navigate('StarRatingsAnimation');
  }, [navigation]);

  const navigateToChartCustom = useCallback(() => {
    navigation.navigate('ChartCustom');
  }, [navigation]);

  const navigateToVictoryChartScreen = useCallback(() => {
    navigation.navigate('VictoryChartScreen');
  }, [navigation]);

  const navigateToNeumorphismMusicUI = useCallback(() => {
    navigation.navigate('NeumorphismMusicUI');
  }, [navigation]);

  const navigateToBedTime = useCallback(() => {
    navigation.navigate('BedTime');
  }, [navigation]);

  const navigateToDoListWithMongoDB = useCallback(() => {
    navigation.navigate('ToDoListMongoDB');
  }, [navigation]);

  const navigateToReactHookFrom = useCallback(() => {
    navigation.navigate('ReactHookFrom');
  }, [navigation]);

  const navigateToIOS13GUI = useCallback(() => {
    navigation.navigate('UI_IOS13');
  }, [navigation]);

  const navigateToCanItBeDone = useCallback(() => {
    navigation.navigate('CanItBeDone');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Text style={{textAlign: 'center'}}>Animated Page</Text>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToHeadPhoneCarousel}>
          <Text style={styles.title}>HeadPhone Carousel</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToCarousel3D}>
          <Text style={styles.title}>Carousel 3D</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateAnimatedTabsAndIndicator}>
          <Text style={styles.title}>Animated Tabs & Animated Indicator</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToOnBoardScreen}>
          <Text style={styles.title}>Onboard Screen</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToOnBoardScreenCarousel}>
          <Text style={styles.title}>Onboard Screen Carousel</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToGalleryView}>
          <Text style={styles.title}>Gallery view - Synced FlatLists</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToChart}>
          <Text style={styles.title}>Chart</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToChartDemo}>
          <Text style={styles.title}>Chart Demo</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToChartCustom}>
          <Text style={styles.title}>Chart Custom</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToChartDemo1}>
          <Text style={styles.title}>Chart Custom 1</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToVictoryChartScreen}>
          <Text style={styles.title}>Victory Chart Screen</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToEventCard}>
          <Text style={styles.title}>Event Cards</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSegmentedControl}>
          <Text style={styles.title}>Segmented Control: Lib animatable</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToHistoryCall}>
          <Text style={styles.title}>History Call</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToCardImage}>
          <Text style={styles.title}>Card Image</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToScrollAnimation}>
          <Text style={styles.title}>Scroll Animation</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCardImageBackground}>
          <Text style={styles.title}>Card Image Background</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCardImageWormPage}>
          <Text style={styles.title}>Card Image Worm Page</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToCarouselMovie}>
          <Text style={styles.title}>Card Carousel Movie</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToListSampleShareElement}>
          <Text style={styles.title}>List Sample Share Element</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSalonShareElement}>
          <Text style={styles.title}>Salon Menu Share Element</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFoodShareElement}>
          <Text style={styles.title}>Food Menu ShareElement</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToPhotographyShareElement}>
          <Text style={styles.title}>Photography Share Element</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToCarsList}>
          <Text style={styles.title}>Cars List Share Element</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToTravelUpList}>
          <Text style={styles.title}>Travel Up List Share Element</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToTravelList}>
          <Text style={styles.title}>Travel List Share ELement</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToZaraProductCarousel}>
          <Text style={styles.title}>Zara Product Carousel</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToScrollingBottomActions}>
          <Text style={styles.title}>Scrolling Bottom Actions</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToTabView}>
          <Text style={styles.title}>Tab View Custom Sample</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToSynchronisedFlatlist}>
          <Text style={styles.title}>Synchronised Flatlist</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAccordionMenu}>
          <Text style={styles.title}>Accordion Menu</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToButtonCustom}>
          <Text style={styles.title}>Button Custom</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToSwipeDelete}>
          <Text style={styles.title}>Swipe Delete</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToUberSwipeToDelete}>
          <Text style={styles.title}>Uber Swipe To Delete</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToFacebook}>
          <Text style={styles.title}>Facebook Animated</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFloatingHeart}>
          <Text style={styles.title}>Floating Heart Animated</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToProfileScreenUI}>
          <Text style={styles.title}>Profile Screen UI</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToBankingApp}>
          <Text style={styles.title}>Banking App</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToStarRatingsAnimation}>
          <Text style={styles.title}>Star Ratings Animation</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToNeumorphismMusicUI}>
          <Text style={styles.title}>Neumorphism Music UI</Text>
        </Pressable>
        <Pressable style={styles.btnNavigation} onPress={navigateToBedTime}>
          <Text style={styles.title}>Bed Time Watch</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToDoListWithMongoDB}>
          <Text style={styles.title}>To Do List With MongoDB</Text>
        </Pressable>
        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToReactHookFrom}>
          <Text style={styles.title}>React Hook From</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToIOS13GUI}>
          <Text style={styles.title}>Building iOS 13 GUI</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToCanItBeDone}>
          <Text style={styles.title}>Can It Be Done</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NavigatePage;
