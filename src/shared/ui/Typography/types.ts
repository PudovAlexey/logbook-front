import { BaseTypographyColor } from '@shared/api/types/uiTypes';
import { StyleProp, TextProps } from 'react-native';

type BaseTypographyProps = TextProps & {
    color?: BaseTypographyColor
    style?: StyleProp<any>
}

export type {
    BaseTypographyProps,
};
