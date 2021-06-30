import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TouchScreen from './screens/TouchScreen';
import PinScreen from './screens/PinScreen';
import HomeScreen from './screens/HomeScreen';
import SendRequestScreen from './screens/SendRequestScreen';
import CardsScreen from './screens/CardsScreen';

MaterialIcons.loadFont();

const AppBankingStack = createStackNavigator();
// const AppBankingStack = createSharedElementStackNavigator();
const TabBankingStack = createBottomTabNavigator();

const BankingApp = () => {
  const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: '#1e1e1e',
      borderTopColor: '#1e1e1e',
      paddingBottom: 32,
    },
  };

  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused}) => {
      let icon = '';
      const color = focused ? '#559dff' : '#828282';
      const size = 24;

      switch (route.name) {
        case 'Cards':
          icon = 'credit-card';
          break;

        case 'SendRequest':
          icon = 'send';
          break;

        default:
          icon = 'dashboard';
      }

      return <MaterialIcons name={icon} size={size} color={color} />;
    },
  });

  const TabBankingStackScreens = () => {
    return (
      <TabBankingStack.Navigator
        tabBarOptions={tabBarOptions}
        initialRouteName="Home"
        screenOptions={screenOptions}>
        <TabBankingStack.Screen name="Home" component={HomeScreen} />
        <TabBankingStack.Screen
          name="SendRequest"
          component={SendRequestScreen}
          options={{title: 'Send & Request'}}
        />
        <TabBankingStack.Screen
          name="Cards"
          component={CardsScreen}
          options={{title: 'My Cards'}}
        />
      </TabBankingStack.Navigator>
    );
  };

  return (
    <AppBankingStack.Navigator headerMode="none">
      <AppBankingStack.Screen name="Touch" component={TouchScreen} />
      <AppBankingStack.Screen name="Pin" component={PinScreen} />
      <AppBankingStack.Screen name="Tabs" component={TabBankingStackScreens} />
    </AppBankingStack.Navigator>
  );
};

export default BankingApp;
