import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Application from '../pages/application';
import BankingApp from '../pages/application/bankingApp';
import ChatFireBaseApp from '../pages/application/chatFireBaseApp';
import AirBnBCloneV1 from '../pages/application/airBnBCloneV1';
import TripBooking from '../pages/application/tripBooking';
import ExpenseTracker from '../pages/application/expenseTracker';
import PlantAppV1 from '../pages/application/plantAppV1';
import DoctorCare from '../pages/application/doctorCare';
import FoodDeliveryV1 from '../pages/application/foodDeliveryV1';
import FacebookV1 from '../pages/application/facebookV1';
import AnimatedLoginScreen from '../pages/application/animatedLoginScreen';
import FoodDeliveryV2 from '../pages/application/foodDeliveryV2';
import WhatsAppV1 from '../pages/application/whatsAppV1';

// ------------------- Application ---------------------------

export type ApplicationStackParamType = {
  ApplicationList: undefined;
  BankingApp: undefined;
  ChatFireBaseApp: undefined;
  AirBnBCloneV1: undefined;
  TripBooking: undefined;
  ExpenseTracker: undefined;
  PlantAppV1: undefined;
  DoctorCare: undefined;
  FoodDeliveryV1: undefined;
  FacebookV1: undefined;
  AnimatedLoginScreen: undefined;
  FoodDeliveryV2: undefined;
  WhatsAppV1: undefined;
};

const AppStack = createStackNavigator<ApplicationStackParamType>();

const ApplicationStackNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="ApplicationList" component={Application} />
      <AppStack.Screen name="BankingApp" component={BankingApp} />
      <AppStack.Screen name="ChatFireBaseApp" component={ChatFireBaseApp} />
      <AppStack.Screen name="AirBnBCloneV1" component={AirBnBCloneV1} />
      <AppStack.Screen name="TripBooking" component={TripBooking} />
      <AppStack.Screen name="ExpenseTracker" component={ExpenseTracker} />
      <AppStack.Screen name="PlantAppV1" component={PlantAppV1} />
      <AppStack.Screen name="DoctorCare" component={DoctorCare} />
      <AppStack.Screen name="FoodDeliveryV1" component={FoodDeliveryV1} />
      <AppStack.Screen name="FacebookV1" component={FacebookV1} />
      <AppStack.Screen
        name="AnimatedLoginScreen"
        component={AnimatedLoginScreen}
      />
      <AppStack.Screen name="FoodDeliveryV2" component={FoodDeliveryV2} />
      <AppStack.Screen name="WhatsAppV1" component={WhatsAppV1} />
    </AppStack.Navigator>
  );
};

export default ApplicationStackNavigator;
