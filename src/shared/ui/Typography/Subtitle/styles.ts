import { StyleSheet } from 'react-native';
import useMakeTypographyToken from '@shared/lib/styleHooks/useMakeTypographyToken';
import { BaseTypographyProps } from '../types';

type SubtitleProps = BaseTypographyProps & {
    size: 'xl' | 'l'
}

const useStyles = (props: SubtitleProps) => {
    const styles = useMakeTypographyToken(props.color);
    return StyleSheet.create({
        xl: {
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 32,
          },

          l: {
            fontWeight: '600',
            fontSize: 14,
            lineHeight: 28,
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
    SubtitleProps,
};
