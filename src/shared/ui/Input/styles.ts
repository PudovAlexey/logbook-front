import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({

      'wrapper': {
        width: '100%',
       overflow: 'hidden',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.colorBorder(),
        display: 'flex',
        flexDirection: 'row',
    },

    'input': {
      width: '100%',
    },

        xs: {
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 12,
          paddingRight: 12,
        },

        wrapperxs: {
            borderRadius: 4,
            maxHeight: 24,
        },

        s: {
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 12,
          paddingRight: 12,
        },

        wrappers: {
            borderRadius: 4,
            maxHeight: 32,
        },

        m: {
          paddingTop: 7,
          paddingBottom: 7,
          paddingLeft: 12,
          paddingRight: 12,
        },

        wrapperm: {
            borderRadius: 8,
            maxHeight: 40,
        },

        l: {
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 12,
          paddingRight: 12,
        },

        wrapperl: {
            borderRadius: 8,
            maxHeight: 48,
        },

        xl: {
          paddingTop: 14,
          paddingBottom: 14,
          paddingLeft: 12,
          paddingRight: 12,
        },

        wrapperxl: {
            borderRadius: 8,
            maxHeight: 56,
        },

        'wrapper_error': {
            borderColor: theme.colors.colorErrorBorder(),
        },

        'wrapper_warning': {
            borderColor: theme.colors.colorWarningBorder(),
        },

        'wrapper_success': {
            borderColor: theme.colors.colorSuccessBorder(),
        },

        'addon': {
          maxWidth: 50,
        },

        'addon-right': {
          borderLeftWidth: 1,
          borderStyle: 'solid',
          borderLeftColor: theme.colors.colorBorder(),
        },

        'addon-left': {
          borderRightWidth: 1,
          borderStyle: 'solid',
          borderRightColor: theme.colors.colorBorder(),
        },
      });
};

export { useStyles };
