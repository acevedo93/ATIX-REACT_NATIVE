import {StyleSheet} from 'react-native';
import {Colors} from './colors';

export const WEIGHT = '700';
export const NM = 16;
export const SMALL_TEXT = 12;

export enum FontsSizes {
  small = 12,
  medium = 14,
  base = 16,
  large = 20,
  extraLarge = 22,
  extraExtraLarge = 24,
}

export const styleFonts = StyleSheet.create({
  h1: {
    fontSize: FontsSizes.extraExtraLarge,
  },
  h2: {
    fontSize: FontsSizes.extraLarge,
  },
  h3: {
    fontSize: FontsSizes.base,
  },
  p: {
    fontSize: FontsSizes.base,
  },
  a: {
    fontSize: FontsSizes.medium,

    color: Colors.primary,
  },
  italic: {
    fontSize: FontsSizes.base,
  },
});
