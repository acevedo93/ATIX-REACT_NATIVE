import {DataScreen, PhotosScreen} from '@ATIX/screens/public';
import {stylesBottomTabsOptions, Tab, tabOptions} from '../generalConfig';
import React from 'react';
import {CustomMenuButton} from '@ATIX/components/atoms/CustomMenuButton';
import HomeIcon from '@assets/icons/home.svg';
import DataIcon from '@assets/icons/data.svg';
import {StyleConstants} from '@ATIX/styles';

export const PublicNavigator = () => {
  return (
    <Tab.Navigator screenOptions={stylesBottomTabsOptions.navigator}>
      <Tab.Screen
        options={{
          ...tabOptions,
          tabBarIcon: () => {
            return (
              <HomeIcon
                width={StyleConstants.bigIcon}
                height={StyleConstants.bigIcon}
              />
            );
          },
        }}
        name="Photos"
        component={PhotosScreen}
      />
      <Tab.Screen
        name="TakePhoto"
        component={PhotosScreen}
        options={{
          headerShown: false,
          tabBarButton: props => {
            return <CustomMenuButton {...props} onPress={console.log} />;
          },
        }}
      />
      <Tab.Screen
        options={{
          ...tabOptions,
          tabBarIcon: () => {
            return (
              <DataIcon
                width={StyleConstants.bigIcon}
                height={StyleConstants.bigIcon}
              />
            );
          },
        }}
        name="Data"
        component={DataScreen}
      />
    </Tab.Navigator>
  );
};
