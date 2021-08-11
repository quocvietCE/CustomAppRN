import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideMenu from './SideMenu';
import MainTabNavigator from './MainNavigator';

const Drawer = createDrawerNavigator();

const drawerRoute = () => (
  <Drawer.Navigator
    drawerPosition="right"
    option={{animationEnable: false}}
    drawerContent={props => <SideMenu {...props} />}
    edgeWidth={0}>
    <Drawer.Screen name="MainTabNavigator" component={MainTabNavigator} />
  </Drawer.Navigator>
);

export default drawerRoute;
