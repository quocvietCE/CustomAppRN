import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ChartList from '../pages/ChartList';
import ChartCustom from '../pages/ChartList/chartCustom';
import ChartCircle from '../pages/ChartList/chartCircle';
import ChartDemo from '../pages/ChartList/chartDemo';
import ChartCustom1 from '../pages/ChartList/chartCustom1';
import ChartVictory from '../pages/ChartList/victoryChart';

// ------------------- Chart List ---------------------------

export type ChartListParamType = {
  ChartList: undefined;
  ChartCircle: undefined;
  ChartCustom: undefined;
  ChartDemo: undefined;
  ChartCustom1: undefined;
  ChartVictory: undefined;
};

const ChartListStack = createStackNavigator<ChartListParamType>();

const ChartListStackNavigator = () => {
  return (
    <ChartListStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ChartListStack.Screen name="ChartList" component={ChartList} />
      <ChartListStack.Screen name="ChartCircle" component={ChartCircle} />
      <ChartListStack.Screen name="ChartCustom" component={ChartCustom} />
      <ChartListStack.Screen name="ChartDemo" component={ChartDemo} />
      <ChartListStack.Screen name="ChartCustom1" component={ChartCustom1} />
      <ChartListStack.Screen name="ChartVictory" component={ChartVictory} />
    </ChartListStack.Navigator>
  );
};

export default ChartListStackNavigator;
