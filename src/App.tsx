import * as React from 'react';
import {store, persistor} from './store';
import {MainNavigation} from './navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//avoid console.logs
if (!__DEV__) {
  console.log = () => {};
}

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};
