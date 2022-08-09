import React from 'react';
import {btnStyles, stylesShared} from '@ATIX/styles';
import {Colors} from '@ATIX/styles';
import {StyleConstants} from '@ATIX/styles';
import {SvgProps} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {P} from '../Text';

interface Props {
  customStyles?: {[key: string]: any};
  label?: string;
  Icon?: React.FC<SvgProps>;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'primary' | 'secondary';
  labelColor?: Colors;
}

export const Button = ({
  customStyles,
  onPress,
  label,
  disabled = false,
  Icon,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {opacity: disabled ? StyleConstants.btnOpacity : 1},
        btnStyles.primary,
        stylesShared.shadow,
        customStyles,
      ]}>
      {Icon && <Icon fill={'#f0f0f0'} height={18} width={18} />}

      {label && (
        <P
          customStyles={{
            color: Colors.textLight,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {label}
        </P>
      )}
    </TouchableOpacity>
  );
};
