import React, { useCallback } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';

import styles from '../navigatePage/style';

const ApplicationNavigation = ({ navigation }) => {
  const navigateToBankingApp = useCallback(() => {
    navigation.navigate('BankingApp');
  }, [navigation]);

  const navigateToChatFireBaseApp = useCallback(() => {
    navigation.navigate('ChatFireBaseApp');
  }, [navigation]);

  const navigateToAirBnBCloneV1 = useCallback(() => {
    navigation.navigate('AirBnBCloneV1');
  }, [navigation]);

  const navigateToTripBooking = useCallback(() => {
    navigation.navigate('TripBooking');
  }, [navigation]);

  const navigateToExpenseTracker = useCallback(() => {
    navigation.navigate('ExpenseTracker');
  }, [navigation]);

  const navigateToPlantAppV1 = useCallback(() => {
    navigation.navigate('PlantAppV1');
  }, [navigation]);

  const navigateToDoctorCare = useCallback(() => {
    navigation.navigate('DoctorCare');
  }, [navigation]);

  const navigateToFoodDeliveryV1 = useCallback(() => {
    navigation.navigate('FoodDeliveryV1');
  }, [navigation]);

  const navigateToFoodDeliveryV2 = useCallback(() => {
    navigation.navigate('FoodDeliveryV2');
  }, [navigation]);

  const navigateToFacebookV1 = useCallback(() => {
    navigation.navigate('FacebookV1');
  }, [navigation]);

  const navigateToAnimatedLoginScreen = useCallback(() => {
    navigation.navigate('AnimatedLoginScreen');
  }, [navigation]);

  const navigateToWhatsAppV1 = useCallback(() => {
    navigation.navigate('WhatsAppV1');
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Text style={{ textAlign: 'center' }}>Application List</Text>
        <Pressable style={styles.btnNavigation} onPress={navigateToBankingApp}>
          <Text style={styles.title}>Banking App</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToChatFireBaseApp}>
          <Text style={styles.title}>Chat FireBase App</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAirBnBCloneV1}>
          <Text style={styles.title}>Air BnB Clone V1</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToTripBooking}>
          <Text style={styles.title}>Trip Booking</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToExpenseTracker}>
          <Text style={styles.title}>Expense Tracker</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToPlantAppV1}>
          <Text style={styles.title}>Plant App V1</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToDoctorCare}>
          <Text style={styles.title}>Doctor Care</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFoodDeliveryV1}>
          <Text style={styles.title}>Food Delivery V1</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToFoodDeliveryV2}>
          <Text style={styles.title}>Food Delivery V2</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToFacebookV1}>
          <Text style={styles.title}>Facebook V1</Text>
        </Pressable>

        <Pressable
          style={styles.btnNavigation}
          onPress={navigateToAnimatedLoginScreen}>
          <Text style={styles.title}>Animated Login Screen</Text>
        </Pressable>

        <Pressable style={styles.btnNavigation} onPress={navigateToWhatsAppV1}>
          <Text style={styles.title}>Whats App V1</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default ApplicationNavigation;
