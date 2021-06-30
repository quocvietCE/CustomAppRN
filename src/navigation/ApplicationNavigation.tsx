import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Application from '../pages/application';
import BankingApp from '../pages/application/bankingApp';

// ------------------- Application ---------------------------

export type ApplicationParamType = {
  BankingApp: undefined;
};

const ApplicationStack = createStackNavigator<ApplicationParamType>();

const ApplicationStackNavigator = () => {
  return (
    <ApplicationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ApplicationStack.Screen name="Application" component={Application} />
      <ApplicationStack.Screen name="BankingApp" component={BankingApp} />
    </ApplicationStack.Navigator>
  );
};

export default ApplicationStackNavigator;
