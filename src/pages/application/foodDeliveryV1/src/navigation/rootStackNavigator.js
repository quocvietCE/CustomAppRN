import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabNavigator from './tabNavigator';
import OrderDelivery from '../screens/OrderDelivery';
import Restaurant from '../screens/Restaurant';

const RootStack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    // <NavigationContainer>
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode="modal">
      <RootStack.Screen name="MainTab" component={TabNavigator} />
      <RootStack.Screen name="OrderDelivery" component={OrderDelivery} />
      <RootStack.Screen name="Restaurant" component={Restaurant} />
    </RootStack.Navigator>
    // </NavigationContainer>
  );
};

export default RootStackNavigator;
