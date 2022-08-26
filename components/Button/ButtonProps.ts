import { ReactNode } from 'react';
import { TouchableOpacityProps, ViewStyle } from 'react-native';

export type ButtonProps = {
  children: string | ReactNode;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
} & TouchableOpacityProps;
