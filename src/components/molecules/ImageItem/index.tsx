import {H1} from '@ATIX/components/atoms';
import React from 'react';
import {View} from 'react-native';
import {Asset} from 'react-native-image-picker';

interface Props {
  image: Asset;
}

export const ImageItem = ({image}: Props) => {
  return (
    <View>
      <H1>ImageItem</H1>
    </View>
  );
};
