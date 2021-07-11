import React from 'react';

import {StatusBar} from 'react-native';
import NavigationChatFireBaseApp from './navigation';
import {Loader} from './component';

import {StoreProvider} from './context/store';

const ChatFireBaseApp = () => {
  return (
    <StoreProvider>
      <StatusBar barStyle="light-content" />
      <NavigationChatFireBaseApp />
      <Loader />
    </StoreProvider>
  );
};

export default ChatFireBaseApp;
// https://www.youtube.com/watch?v=ToMn14kM6Ws&list=PLQ4wpygoZpKO-qpGFnIdnKuz11S2dwyew&index=1
