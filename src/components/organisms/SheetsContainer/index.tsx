import {H1} from '@ATIX/components/atoms';
import {langs} from './langs';
import {SheetsList} from '@ATIX/components/molecules';
import {View} from 'react-native';
import React from 'react';

export const SheetsContainer = () => {
  return (
    <View style={{flex: 1}}>
      <H1>{langs.title}</H1>
      <SheetsList />
    </View>
  );
};
