import {H3} from '@ATIX/components/atoms';
import {Sheet} from '@ATIX/store/slices/sheets';
import {StyleConstants, stylesShared} from '@ATIX/styles';
import {View} from 'react-native';
import DataIcon from '@assets/icons/data.svg';
import React from 'react';

interface Props {
  sheet: Sheet;
}

export const SheetItem = ({sheet}: Props) => {
  return (
    <View
      style={[stylesShared.paddingVertical, stylesShared.paddingHorizontal]}>
      <View
        style={[
          stylesShared.AlignMainAxisCenter,
          stylesShared.AlignOffAxisCenter,
        ]}>
        <DataIcon
          width={StyleConstants.largeIcon}
          height={StyleConstants.largeIcon}
        />
        <H3>{sheet.name}</H3>
      </View>
    </View>
  );
};
