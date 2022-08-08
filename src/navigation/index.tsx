import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {navigationRef} from './generalConfig';
import {PublicNavigator} from './public/index';

export const MainNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <PublicNavigator />
    </NavigationContainer>
  );
};
