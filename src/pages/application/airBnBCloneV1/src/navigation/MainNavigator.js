import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CreateList from '../screens/CreateList';
import TurnOnNotificationsScreen from '../screens/TurnOnNotifications';
import LoggedInTabBottomNavigator from './TabBottomNavigator';
import ErrorMessage from '../screens/Manager/ErrorMessage';

const Stack = createStackNavigator();
const screenOptionStyle = {
  // headerShown: false,
};

const MainTabNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName="TurnOnNotificationStack"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="CreateListStack" component={CreateList} />
      <Stack.Screen
        name="TurnOnNotificationStack"
        component={TurnOnNotificationsScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LoggedInTabStack"
        component={LoggedInTabBottomNavigator}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="MyModal"
        component={ErrorMessage}
        options={{
          header: () => null,
          cardStyle: {
            backgroundColor: 'rgba(68, 68, 68, 0.6)',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainTabNavigator;
