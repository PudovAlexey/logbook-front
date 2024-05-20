import { useTheme } from '@rneui/themed';
import { StyleSheet, Dimensions } from 'react-native';

const useStyles = () => {
  const { theme } = useTheme();
  const windowWidth = Dimensions.get('window').width;

  return StyleSheet.create({
    cardView: {
      display: 'flex',
      flexDirection: 'column',
    },
    logInfo: {
      height: 56,
      backgroundColor: theme.colors.colorFillSecondary(),
      borderBottomLeftRadius: 12,
      borderBottomRightRadius: 12,
      marginBottom: 24,
    },

    item: {
      width: 30,
    },

    scroller: {
        // flex: 1,
        // justifyContent: 'center',
        // width: windowWidth,
    },

    container: {
        // flex: 1,
    //   flexDirection: 'row',
      flexWrap: 'wrap',
    //   alignItems: 'center',
    //   justifyContent: 'center',
      width: windowWidth,
    },
    scrollContainer: {
      display: 'flex',
    //   width: windowWidth,
    //   flexWrap: 'wrap',
    //   flexDirection: 'row',
    //   height: '100%', // Add a height property with a fixed value
    },
  });
};

export { useStyles };
