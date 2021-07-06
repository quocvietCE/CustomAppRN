import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Application from '../pages/application';
import BankingApp from '../pages/application/bankingApp';
import ChatFireBaseApp from '../pages/application/chatFireBaseApp';

// ------------------- Application ---------------------------

export type ApplicationParamType = {
  ApplicationList: undefined;
  BankingApp: undefined;
  ChatFireBaseApp: undefined;
};

const ApplicationStack = createStackNavigator<ApplicationParamType>();

const ApplicationStackNavigator = () => {
  return (
    <ApplicationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ApplicationStack.Screen name="ApplicationList" component={Application} />
      <ApplicationStack.Screen name="BankingApp" component={BankingApp} />
      <ApplicationStack.Screen
        name="ChatFireBaseApp"
        component={ChatFireBaseApp}
      />
    </ApplicationStack.Navigator>
  );
};

export default ApplicationStackNavigator;
