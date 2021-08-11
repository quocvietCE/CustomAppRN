import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreContainer from '../screens/Explore';
import Inbox from '../components/Inbox';
import Profile from '../screens/Profile';
import Saved from '../components/Saved';
import Trips from '../components/Trips';
import {Colors} from '../themes';
import {useTranslation} from 'react-i18next';
Ionicons.loadFont();

const Tab = createBottomTabNavigator();

const LoggedInTabBottomNavigator = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.pink,
        inactiveTintColor: Colors.gray02,
        style: {
          justifyContent: 'center',
          backgroundColor: '#FFF',
          elevation: 2,
        },
      }}>
      <Tab.Screen
        name="ExploreTab"
        component={ExploreContainer}
        options={{
          tabBarLabel: t('tabTitle.explore'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-search" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="SavedTab"
        component={Saved}
        options={{
          tabBarLabel: t('tabTitle.saved'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-heart-outline" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="TripsTab"
        component={Trips}
        options={{
          tabBarLabel: t('tabTitle.trips'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="logo-ionic" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="InboxTab"
        component={Inbox}
        options={{
          tabBarLabel: t('tabTitle.inbox'),
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-archive" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarLabel: t('tabTitle.profile'),
          tabBarIcon: ({color, size}) => (
            <Ionicons
              name="ios-person-circle-outline"
              color={color}
              size={25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default LoggedInTabBottomNavigator;
