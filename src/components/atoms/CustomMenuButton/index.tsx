import {
  closeBottomSheet,
  isOpenBottomSheetSelector,
  openBottomSheet,
} from '@ATIX/store/slices/bottomSheet';
import {StyleConstants} from '@ATIX/styles';
import {styles} from './styles';
import {TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import EyeIcon from '@assets/icons/eye.svg';
import React from 'react';

export const CustomMenuButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(isOpenBottomSheetSelector);

  const onPress = () => {
    dispatch(!isOpen ? openBottomSheet() : closeBottomSheet());
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <View style={styles.inner}>
        <EyeIcon
          width={StyleConstants.bigIcon}
          height={StyleConstants.bigIcon}
        />
      </View>
    </TouchableOpacity>
  );
};
