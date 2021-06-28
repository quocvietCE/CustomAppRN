import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// ------------------- Season 4 ---------------------------
import LiquidSwipe from '../pages/CanItBeDone/Season4/liquidSwipe';

export type Season4ParamType = {
  LiquidSwipe: undefined;
};

const Season4Stack = createStackNavigator<Season4ParamType>();

const Season4StackNavigator = () => {
  return (
    <Season4Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Season4Stack.Screen name="LiquidSwipe" component={LiquidSwipe} />
    </Season4Stack.Navigator>
  );
};

// ------------------- CanItBeDone ---------------------------

import CanItBeDone from '../pages/CanItBeDone';

export type CanItBeDoneParamType = {
  CanItBeDone: undefined;
  Season3: undefined;
  Season4: undefined;
};

const CanItBeDoneStack = createStackNavigator<CanItBeDoneParamType>();

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
