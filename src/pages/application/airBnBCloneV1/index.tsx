import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './src/navigation/AppNavigator';
import Loader from './src/screens/Manager/Loader';

import './src/config/i18n';

import store, {persistor} from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
        <Loader />
      </PersistGate>
    </Provider>
  );
};

export default App;
