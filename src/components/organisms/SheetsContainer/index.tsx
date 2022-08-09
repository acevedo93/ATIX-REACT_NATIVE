import {Button, H1} from '@ATIX/components/atoms';
import {deleteSheets} from '@ATIX/store/slices/sheets';
import {langs} from './langs';
import {SheetsList} from '@ATIX/components/molecules';
import {stylesShared} from '@ATIX/styles';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
import React from 'react';
export const SheetsContainer = () => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View style={[stylesShared.row, stylesShared.spaceBetween]}>
        <H1>{langs.title}</H1>
        <Button
          onPress={() => {
            dispatch(deleteSheets());
          }}
          label={langs.delete}
        />
      </View>
      <SheetsList />
    </View>
  );
};
