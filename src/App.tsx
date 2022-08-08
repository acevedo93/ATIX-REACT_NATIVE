import * as React from 'react';
import {MainNavigation} from './navigation';

//avoid console.logs
if (!__DEV__) {
  console.log = () => {};
}

export const App = () => {
  return <MainNavigation />;
};
