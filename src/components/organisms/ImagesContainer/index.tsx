import {H1} from '@ATIX/components/atoms';
import {ImageList} from '@ATIX/components/molecules';
import {langs} from './langs';
import {View} from 'react-native';
import React from 'react';

export const ImagesContainer = () => {
  return (
    <View style={{flex: 1}}>
      <H1>{langs.title}</H1>
      <ImageList />
    </View>
  );
};
