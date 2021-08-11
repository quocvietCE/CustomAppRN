import {NavigationContainerRef} from '@react-navigation/native';
import React from 'react';

export const isReadyRef = React.createRef<NavigationContainerRef>();

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: string, params?: any) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function getCurrentRouteName() {
  if (!navigationRef.current) {
    return;
  }

  return navigationRef.current.getCurrentRoute();
}

export function pop() {
  if (navigationRef.current && navigationRef) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  } else {
  }
}
