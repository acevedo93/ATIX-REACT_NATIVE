import {H3} from '@ATIX/components/atoms';
import {Sheet} from '@ATIX/store/slices/sheets';
import {stylesShared} from '@ATIX/styles';
import {View} from 'react-native';
import React from 'react';

interface Props {
  sheet: Sheet;
}

export const SheetItem = ({sheet}: Props) => {
  return (
    <View style={[stylesShared.paddingVertical]}>
      <H3>{sheet.name}</H3>
    </View>
  );
};
