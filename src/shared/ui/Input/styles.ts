import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = () => {
    const { theme } = useTheme();

    return StyleSheet.create({
        
        xs: {
          paddingTop: 1,
          paddingBottom: 1,
          paddingLeft: 12,
          paddingRight: 12,
        },
      
        wrapperxs: {
            borderRadius: 4,
        },
      
        s: {
          paddingTop: 3,
          paddingBottom: 3,
          paddingLeft: 12,
          paddingRight: 12,
        },
      
        wrappers: {
            borderRadius: 4,
        },
      
        m: {
          paddingTop: 7,
          paddingBottom: 7,
          paddingLeft: 12,
          paddingRight: 12,
        },
      
        wrapperm: {
            borderRadius: 8,
        },
      
        l: {
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 12,
          paddingRight: 12,
        },
      
        wrapperl: {
            borderRadius: 8,
        },
      
        xl: {
          paddingTop: 14,
          paddingBottom: 14,
          paddingLeft: 12,
          paddingRight: 12,
        },
      
        wrapperxl: {
            borderRadius: 8,
        },

        'wrapper_error': {
            borderColor: theme.colors.colorErrorBorder()
        },

        'wrapper_warning': {
            borderColor: theme.colors.colorWarningBorder()
        },

        'wrapper_success': {
            borderColor: theme.colors.colorSuccessBorder()
        },

        'wrapper': {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: theme.colors.colorBorder()
        },
      })
};

export { useStyles };
