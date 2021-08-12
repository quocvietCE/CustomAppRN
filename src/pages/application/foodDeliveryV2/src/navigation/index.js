import React from 'react';
// import {createAppContainer} from 'react-navigation';
// import {enableScreens} from 'react-native-screens';
// import {createStackNavigator} from 'react-navigation-stack';
// import { Image, Platform } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/home';
import Order from '../screens/order/OrderScreen';

const StackNavigator = createStackNavigator();

// Icon.loadFont();

// import theme from '../themes';
// enableScreens();
// const screens = createStackNavigator(
//   {
//     Home,
//     Order: {
//       screen: Order,
//       navigationOptions: {
//         headerShown: false,
//       },
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       //   headerStyle: {
//       //     height: theme.sizes.base * (Platform.OS === 'ios' ? 5 : 4),
//       //     borderBottomColor: '#F2F2F2',
//       //     elevation: 0, // for android
//       //     backgroundColor: Platform.OS === 'ios' ? '#F2F2F2' : 'transparent',
//       //     borderBottomWidth: 5,
//       //   },
//       //   headerBackImage: () => (
//       //     <Icon name="angle-left" color={theme.colors.secondary} size={30} />
//       //   ),
//       //   headerBackTitleVisible: false,
//       //   headerBackTitle: '',
//       //   headerLeftContainerStyle: {
//       //     alignItems: 'center',
//       //     marginLeft: theme.sizes.base + 10,
//       //   },
//       //   headerRightContainerStyle: {
//       //     alignItems: 'center',
//       //     paddingRight: theme.sizes.base,
//       //     backgroundColor: 'transparent',
//       //   },
//       //   headerTitle: '',
//       //   headerTintColor: 'white',
//       headerShown: false,
//     },
//   },
// );

// export default createAppContainer(screens);

const NavigationRoot = () => {
  return (
    <StackNavigator.Navigator
      initialRouteName="Home"
      options={{ headerShown: false }}>
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <StackNavigator.Screen name="Order" component={Order} />
    </StackNavigator.Navigator>
  );
};

export default NavigationRoot;
