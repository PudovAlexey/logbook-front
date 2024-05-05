import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  const { theme } = useTheme();
  return StyleSheet.create({
    headerContainer: {
      backgroundColor: theme.colors.colorFillPrimary(),
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 10,
      paddingTop: 15,
      justifyContent: 'space-between',
      alignSelf: 'stretch',
    },
    });
};

    export {
      useStyles,
    };
