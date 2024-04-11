import { BaseTypographyColor } from '@shared/api/types/uiTypes';
import useMakeTypographyToken from '@shared/lib/styleHooks/useMakeTypographyToken';
import { StyleProp, StyleSheet } from 'react-native';

type CaptionProps = {
    level?: '1' | '2' | '3' | '4'
    color?: BaseTypographyColor
    style?: StyleProp<any>
    fontType?: 'primary' | 'secondary'
}

const useStyles = ({ color }: CaptionProps) => {
    const styles = useMakeTypographyToken(color);
    return StyleSheet.create({
        1: {
            fontWeight: '300',
            fontSize: 16,
            lineHeight: 28,
        },

        2: {
            fontWeight: '300',
            fontSize: 14,
            lineHeight: 26,
        },

        3: {
            fontWeight: '300',
            fontSize: 12,
            lineHeight: 22,
        },

        4: {
            fontWeight: '300',
            fontSize: 10,
            lineHeight: 20,
        },

        color: {
            color: styles,
        },
    });
};

export {
    useStyles,
};

export type {
    CaptionProps,
};
