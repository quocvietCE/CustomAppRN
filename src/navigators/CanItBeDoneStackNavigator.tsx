import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// ------------------- Season 4 ---------------------------
import Season4List from '../pages/CanItBeDone/Season4';

export type Season4ParamType = {
  Season4List: undefined;
  LiquidSwipe: undefined;
};

const Season4Stack = createStackNavigator<Season4ParamType>();

const Season4StackNavigator = () => {
  return (
    <Season4Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Season4Stack.Screen name="Season4List" component={Season4List} />
    </Season4Stack.Navigator>
  );
};

// ------------------- CanItBeDone ---------------------------

import CanItBeDone from '../pages/CanItBeDone';

export type CanItBeDoneStackParamType = {
  CanItBeDone: undefined;
  Season3: undefined;
  Season4: undefined;
};

const CanItBeDoneStack = createStackNavigator<CanItBeDoneStackParamType>();

const CanItBeDoneStackNavigator = () => {
  return (
    <CanItBeDoneStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <CanItBeDoneStack.Screen name="CanItBeDone" component={CanItBeDone} />
      <CanItBeDoneStack.Screen
        name="Season4"
        component={Season4StackNavigator}
      />
    </CanItBeDoneStack.Navigator>
  );
};

export default CanItBeDoneStackNavigator;
