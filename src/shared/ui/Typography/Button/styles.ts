import { StyleSheet } from 'react-native';
import { BaseSize } from '@shared/api/types/uiTypes';
import useMakeTypographyToken from '@shared/lib/styleHooks/useMakeTypographyToken';
import { BaseTypographyProps } from '../types';

type ButtonTypographyProps = BaseTypographyProps & {
    size: BaseSize
}

const useStyles = ({ color }: ButtonTypographyProps) => {
    const token = useMakeTypographyToken(color);
  return StyleSheet.create({
    xl: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
    },

    l: {
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 24,
    },

    m: {
      fontWeight: '600',
      fontSize: 14,
      lineHeight: 22,
    },

    s: {
      fontWeight: '500',
      fontSize: 12,
      lineHeight: 20,
    },

    xs: {
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 20,
      },

    color: {
        color: token,
    },
  });
};

export {
    useStyles,
};

export type {
    ButtonTypographyProps,
};
