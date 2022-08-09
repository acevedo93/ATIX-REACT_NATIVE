import {H1} from '@ATIX/components/atoms';
import {ImageList} from '@ATIX/components/molecules';
import React from 'react';
import {View} from 'react-native';
import {langs} from './langs';

export const ImagesContainer = () => {
  return (
    <View>
      <H1>{langs.title}</H1>
      <ImageList />
    </View>
  );
};
