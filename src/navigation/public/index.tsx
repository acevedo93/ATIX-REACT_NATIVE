import {CsvScreen, PhotosScreen} from '@ATIX/screens/public';
import {Stack, Tab} from '../generalConfig';
import React from 'react';
import {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

const tabOptions: BottomTabNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
  },
};
export const PublicNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{...tabOptions}} name="Csv" component={CsvScreen} />
      <Tab.Screen
        options={{...tabOptions}}
        name="Photos"
        component={PhotosScreen}
      />
    </Tab.Navigator>
  );
};
