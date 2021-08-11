import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LibrarySample from '../pages/LibrarySample';
import SegmentedTab from '../pages/LibrarySample/segmented';
import ReactHookForm from '../pages/LibrarySample/reactHookForm';
import ToDoListMongoDB from '../pages/LibrarySample/toDoListMongoDB';

// ------------------- Chart List ---------------------------

export type LibrarySampleStackParamType = {
  LibrarySample: undefined;
  SegmentedTab: undefined;
  ReactHookForm: undefined;
  ToDoListMongoDB: undefined;
};

const LibraryStack = createStackNavigator<LibrarySampleStackParamType>();

const LibrarySampleStackNavigator = () => {
  return (
    <LibraryStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <LibraryStack.Screen name="LibrarySample" component={LibrarySample} />
      <LibraryStack.Screen name="SegmentedTab" component={SegmentedTab} />
      <LibraryStack.Screen name="ReactHookForm" component={ReactHookForm} />
      <LibraryStack.Screen name="ToDoListMongoDB" component={ToDoListMongoDB} />
    </LibraryStack.Navigator>
  );
};

export default LibrarySampleStackNavigator;
