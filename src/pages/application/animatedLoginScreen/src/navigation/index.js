import React from 'react';
// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screen/LoginScreen';
import SignupScreen from '../screen/SignupScreen';
import SwiperScreen from '../screen/SwiperScreen';

const StackNavigator = createStackNavigator();

// const StackNavigator = createStackNavigator(
//   {
//     SwiperScreen: {
//       screen: SwiperScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     SignupScreen: {
//       screen: SignupScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//     LoginScreen: {
//       screen: LoginScreen,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     initialRouteName: 'LoginScreen',
//   },
// );

const NavigationRoot = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName="SwiperScreen"
      options={{ headerShown: false }}>
      <StackNavigator.Screen name="SwiperScreen" component={SwiperScreen} />
      <StackNavigator.Screen name="SignupScreen" component={SignupScreen} />
      <StackNavigator.Screen name="LoginScreen" component={LoginScreen} />
    </StackNavigator.Navigator>
  );
};

export default NavigationRoot;

// export default createAppContainer(StackNavigator);
