import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Application from '../pages/application';
import BankingApp from '../pages/application/bankingApp';
import ChatFireBaseApp from '../pages/application/chatFireBaseApp';
import AirBnBCloneV1 from '../pages/application/airBnBCloneV1';

// ------------------- Application ---------------------------

export type ApplicationStackParamType = {
  ApplicationList: undefined;
  BankingApp: undefined;
  ChatFireBaseApp: undefined;
  AirBnBCloneV1: undefined;
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
    </AppStack.Navigator>
  );
};

export default ApplicationStackNavigator;
