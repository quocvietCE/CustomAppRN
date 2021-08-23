import React from 'react';
import { View, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import MainTab from './MainTabNavigator';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';

FontAwesome.loadFont();
Octicons.loadFont();
MaterialCommunityIcons.loadFont();
MaterialIcons.loadFont();

const RootStack = createStackNavigator();

const RootRouter = () => (
  <RootStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerRight: () => (
        <View style={styles.headerRight}>
          <Octicons name="search" size={22} color={Colors.light.background} />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={22}
            color={Colors.light.background}
          />
        </View>
      ),
    }}>
    <RootStack.Screen
      name="Root"
      component={MainTab}
      options={{ title: 'WhatsApp' }}
    />
    <RootStack.Screen
      name="ChatRoom"
      component={ChatRoomScreen}
      options={({ route }) => ({
        title: route.params.name,
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              width: 100,
              justifyContent: 'space-between',
              marginRight: 10,
            }}>
            <FontAwesome name="video-camera" size={22} color={'white'} />
            <MaterialIcons name="call" size={22} color={'white'} />
            <MaterialCommunityIcons
              name="dots-vertical"
              size={22}
              color={'white'}
            />
          </View>
        ),
      })}
    />
    <RootStack.Screen name="Contacts" component={ContactsScreen} />
  </RootStack.Navigator>
);
export default RootRouter;

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
    marginRight: 10,
  },
});
