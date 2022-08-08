import {styleFonts} from '@ATIX/styles/fonts';
import {stylesShared} from '@ATIX/styles/shared';
import React from 'react';
import {Pressable, Text} from 'react-native';

interface Props {
  children: React.ReactNode;
  customStyles?: {[key: string]: any};
  numberOfLines?: number;
}
interface PropsLink extends Props {
  onPress: () => void;
}

export const H1 = ({children, customStyles, numberOfLines}: Props) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styleFonts.h1, customStyles]}>
      {children}
    </Text>
  );
};

export const H2 = ({children, customStyles, numberOfLines}: Props) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styleFonts.h2, customStyles]}>
      {children}
    </Text>
  );
};

export const H3 = ({children, customStyles}: Props) => {
  return <Text style={[styleFonts.h3, customStyles]}>{children}</Text>;
};

export const P = ({children, customStyles, numberOfLines}: Props) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styleFonts.p, customStyles]}>
      {children}
    </Text>
  );
};

export const Link = ({children, customStyles, onPress}: PropsLink) => {
  return (
    <Text onPress={onPress} style={[styleFonts.a, customStyles]}>
      {children}
    </Text>
  );
};

export const Italic = ({children, customStyles}: Props) => {
  return <Text style={[styleFonts.italic, customStyles]}>{children}</Text>;
};
