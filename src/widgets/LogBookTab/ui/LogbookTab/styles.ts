import { useTheme } from '@rneui/themed';
import { StyleSheet } from 'react-native';


const useStyles = () => {
    const { theme } = useTheme();

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
        cardWrapper: {
            alignSelf: 'stretch',
            // width: '100%',
            // flex: 1,
            // display: 'flex',
            // gap: 10,
            // flexWrap: 'wrap',
            // flexDirection: 'row',
            // justifyContent: 'center',
            // alignItems: 'center',
            // borderColor: 'blue',
          },
    });
};

export {
    useStyles,
};
