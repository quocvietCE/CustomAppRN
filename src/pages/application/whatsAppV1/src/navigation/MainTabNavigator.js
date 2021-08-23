import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

import Camera from '../screens/CameraScreen';
import Calls from '../screens/CallsScreen';
import Chats from '../screens/ChatsScreen';
import Status from '../screens/StatusScreen';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Colors from '../constants/Colors';
import { useColorScheme } from 'react-native';

Fontisto.loadFont();

const TopTab = createMaterialTopTabNavigator();

const MainTabNavigator = () => {
  const colorScheme = useColorScheme();
  console.log('colorScheme: ', colorScheme);
  return (
    <TopTab.Navigator
      initialRouteName="Chats"
      screenOptions={{
        activeTintColor: Colors[colorScheme].background,
        style: {
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4,
        },
        labelStyle: {
          fontWeight: 'bold',
        },
        showIcon: true,
      }}
      // tabBarOptions={{
      //   activeTintColor: Colors[colorScheme].background,
      //   style: {
      //     backgroundColor: Colors[colorScheme].tint,
      //   },
      //   indicatorStyle: {
      //     backgroundColor: Colors[colorScheme].background,
      //     height: 4,
      //   },
      //   labelStyle: {
      //     fontWeight: 'bold',
      //   },
      //   showIcon: true,
      // }}
    >
      <TopTab.Screen
        name="Camera"
        component={Camera}
        options={{
          tabBarIcon: ({ color }) => (
            <Fontisto name="camera" color={color} size={18} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <TopTab.Screen name="Chats" component={Chats} />
      <TopTab.Screen name="Status" component={Status} />
      <TopTab.Screen name="Calls" component={Calls} />
    </TopTab.Navigator>
  );
};

export default MainTabNavigator;
