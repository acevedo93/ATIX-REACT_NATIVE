import {stylesShared} from '@ATIX/styles';
import {P} from '@ATIX/components/atoms';
import {StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {
  message: string;
}

export const ToolTip = ({message}: Props) => {
  return (
    <View style={[styles.container, stylesShared.AlignOffAxisCenter]}>
      <P>{message}</P>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 100,
  },
});
