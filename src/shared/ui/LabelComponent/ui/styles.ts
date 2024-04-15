import { BaseTypographyColor } from '@shared/api/types/uiTypes';
import { StyleSheet } from 'react-native';

type LabelComponentProps = {
    label?: string
    required?: string
    validationText?: string
    status?: BaseTypographyColor
}

const useStyles = () => {
    return StyleSheet.create({
        root: {
            position: 'relative',
            width: '100%',
        },

        caption: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: -20,
        },
    });
};

export {
    useStyles,
};

export type {
    LabelComponentProps,
};
