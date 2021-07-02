import React, {useCallback} from 'react';
import {View, Text, Pressable, ScrollView} from 'react-native';

import styles from './style';

const NavigatePage = ({navigation}) => {
  const navigateToHeadPhoneCarousel = useCallback(() => {
    navigation.navigate('HeadphoneCarousel');
  }, [navigation]);

  const navigateToEventCard = useCallback(() => {
    navigation.navigate('EventCards');
  }, [navigation]);

  const navigateToCarouselMovie = useCallback(() => {
    navigation.navigate('CarouselMovie');
  }, [navigation]);

  const navigateToListSampleShareElement = useCallback(() => {
    navigation.navigate('ListSampleShareElement');
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

  const navigateToCanItBeDone = useCallback(() => {
    navigation.navigate('CanItBeDone');
  }, [navigation]);

  const navigateToApplication = useCallback(() => {
    navigation.navigate('Application');
  }, [navigation]);

  const navigateToChartList = useCallback(() => {
    navigation.navigate('ChartList');
  }, [navigation]);

  const navigateToLibrarySample = useCallback(() => {
    navigation.navigate('LibrarySample');
  }, [navigation]);

  const navigateToCustomUIList = useCallback(() => {
    navigation.navigate('CustomUIList');
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

        <Pressable style={styles.btnNavigation} onPress={navigateToEventCard}>
          <Text style={styles.title}>Event Cards Share Element</Text>
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
          onPress={navigateToCustomUIList}>
          <Text style={styles.title}>Custom UI List</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToLibrarySample}>
          <Text style={styles.title}>Library Sample</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToChartList}>
          <Text style={styles.title}>Chart List</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToCanItBeDone}>
          <Text style={styles.title}>Can It Be Done</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToApplication}>
          <Text style={styles.title}>Application List</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default NavigatePage;
