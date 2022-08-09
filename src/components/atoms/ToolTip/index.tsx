import {Colors, StyleConstants, stylesShared} from '@ATIX/styles';
import {P} from '@ATIX/components/atoms';
import {StyleSheet, View} from 'react-native';
import ArrowIcon from '@assets/icons/arrow.svg';
import React from 'react';

interface Props {
  message: string;
}

export const ToolTip = ({message}: Props) => {
  return (
    <View style={[styles.container, stylesShared.AlignOffAxisCenter]}>
      <P>{message}</P>
      <ArrowIcon
        fill={Colors.primary}
        width={StyleConstants.bigIcon}
        height={StyleConstants.bigIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
  },
});
