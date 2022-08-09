import {Button, H1} from '@ATIX/components/atoms';
import {deleteImages} from '@ATIX/store/slices/images';
import {ImageList} from '@ATIX/components/molecules';
import {langs} from './langs';
import {stylesShared} from '@ATIX/styles';
import {useDispatch} from 'react-redux';
import {View} from 'react-native';
import React from 'react';

export const ImagesContainer = () => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View style={[stylesShared.row, stylesShared.spaceBetween]}>
        <H1>{langs.title}</H1>
        <Button
          onPress={() => {
            dispatch(deleteImages());
          }}
          label={langs.delete}
        />
      </View>
      <ImageList />
    </View>
  );
};
