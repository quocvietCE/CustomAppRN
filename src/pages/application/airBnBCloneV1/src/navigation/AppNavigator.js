import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
// REDUX
import {View, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useSelector, useDispatch} from 'react-redux';
// import {NavigationContainer} from '@react-navigation/native';
import DrawerRoute from './DrawerRoute';
import AuthTabNavigator from './AuthNavigator';
import NotificationNetwork from '../components/NotificationNetWork';
import {setStatusConnected} from '../store/slice/NetworkSlice';
// import {navigationRef} from '../helpers/RootNavigation';

const AppNavigator = () => {
  const loggedInState = useSelector(state => state.auth.loggedInState);
  const networkIsConnected = useSelector(state => state.network.isConnected);
  const dispatch = useDispatch();

  useEffect(() =>
    NetInfo.addEventListener(state => {
      dispatch(
        setStatusConnected({
          isConnected: state.isConnected,
          typeNetwork: state.type,
        }),
      );
    }),
  );

  // return (
  //   <View style={styles.wrapper}>
  //     {!networkIsConnected && <NotificationNetwork />}
  //     <NavigationContainer
  //       ref={navigationRef}
  //       onReady={() => {
  //         isReadyRef.current = true;
  //       }}>
  //       {!loggedInState ? <AuthTabNavigator /> : <DrawerRoute />}
  //     </NavigationContainer>
  //   </View>
  // );

  return (
    <View style={styles.wrapper}>
      {!networkIsConnected && <NotificationNetwork />}
      {!loggedInState ? <AuthTabNavigator /> : <DrawerRoute />}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default AppNavigator;
