import { StyleSheet } from 'react-native';
import useMakeTypographyToken from '@shared/lib/styleHooks/useMakeTypographyToken';
import { BaseTypographyProps } from '../types';

type TextProps = BaseTypographyProps & {
  size?: '1' | '2' | '3' | '4'
  }

const useStyle = (props: TextProps) => {
  const styles = useMakeTypographyToken(props.color);
  return StyleSheet.create({
    1: {
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 28,
    },
    2: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 26,
    },
    3: {
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 22,
    },
    4: {
      fontWeight: '400',
      fontSize: 10,
      lineHeight: 20,
    },

    color: {
      color: styles,
    },
  });
};

export {
    useStyle,
};

export type {
  TextProps,
};
