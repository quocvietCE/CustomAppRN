import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoggedOut from '../screens/LoggedOut';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';

const Stack = createStackNavigator();

const screenOptionStyle = {
  // headerShown: false,
};

const AuthTabNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="LoggedOutStack" component={LoggedOut} />
      <Stack.Screen name="LoginStack" component={Login} />
      <Stack.Screen name="ForgotPasswordStack" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthTabNavigator;
