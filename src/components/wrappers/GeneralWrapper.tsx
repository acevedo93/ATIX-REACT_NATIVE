import {stylesShared} from '@ATIX/styles';
import React, {FunctionComponent} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';

interface Props {
  children: React.ReactNode;
}

export const GeneralWrapper: FunctionComponent<Props> = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={stylesShared.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
