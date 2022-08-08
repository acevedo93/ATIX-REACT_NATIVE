import {StyleSheet} from 'react-native';
import {Colors} from './colors';
import {StyleConstants} from './shared';

export const btnStyles = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
    borderRadius: StyleConstants.btnBorderRadius,
    padding: StyleConstants.btnPadding,
    shadowRadius: StyleConstants.btnRadiusShadow,
  },
});
