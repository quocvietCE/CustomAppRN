import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
Entypo.loadFont();
Icon.loadFont();

import {Button} from '../components';

import Welcome from '../screens/Welcome';
import Browse from '../screens/Browse';
import Explore from '../screens/Explore';
import Login from '../screens/Login';
import Product from '../screens/Product';
import Settings from '../screens/Settings';
import Signup from '../screens/Signup';
import Forgot from '../screens/Forgot';

import {useNavigation} from '@react-navigation/native';

import themeApp from '../constants/theme';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
  },
};

const Navigation = () => {
  // const navigation = useNavigation();

  return (
    // <NavigationContainer theme={theme}>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Browse" component={Browse} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: '',
          headerRight: () => (
            <Button
              onPress={() => {
                console.log('aaa');
              }}>
              <Entypo
                name="dots-three-horizontal"
                color={themeApp.colors.gray}
                style={{marginRight: 20}}
                size={20}
              />
            </Button>
          ),
          headerLeft: () => (
            <Button
              onPress={() => {
                console.log('Left');
                navigation.goBack();
              }}>
              <Icon
                name="angle-left"
                color={themeApp.colors.gray}
                size={30}
                style={{marginLeft: 20}}
              />
            </Button>
          ),
        })}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={({navigation}) => ({
          headerShown: true,
          headerTitle: '',
          headerLeft: () => (
            <Button
              onPress={() => {
                console.log('Left');
                navigation.goBack();
              }}>
              <Icon
                name="angle-left"
                color={themeApp.colors.gray}
                size={30}
                style={{marginLeft: 20}}
              />
            </Button>
          ),
        })}
      />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Navigation;
