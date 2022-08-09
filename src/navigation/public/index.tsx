import {CustomMenuButton} from '@ATIX/components/atoms/CustomMenuButton';
import {DataScreen, ImagesScreen} from '@ATIX/screens/public';
import {StyleConstants} from '@ATIX/styles';
import {stylesBottomTabsOptions, Tab, tabOptions} from '../generalConfig';
import DataIcon from '@assets/icons/data.svg';
import HomeIcon from '@assets/icons/home.svg';
import React from 'react';

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
        name="Images"
        component={ImagesScreen}
      />
      <Tab.Screen
        name="TakePhoto"
        component={ImagesScreen}
        options={{
          headerShown: false,
          tabBarButton: _ => {
            return <CustomMenuButton />;
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
        name="Sheets"
        component={DataScreen}
      />
    </Tab.Navigator>
  );
};
