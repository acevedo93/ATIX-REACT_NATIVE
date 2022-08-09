import {GlobalBottomSheet} from '@ATIX/components/organisms';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {navigationRef} from './generalConfig';
import {PublicNavigator} from './public/index';

export const MainNavigation = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer ref={navigationRef}>
        <PublicNavigator />
      </NavigationContainer>
      <GlobalBottomSheet />
    </GestureHandlerRootView>
  );
};
