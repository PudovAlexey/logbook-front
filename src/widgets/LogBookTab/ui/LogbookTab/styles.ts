import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    cardView: {
        display: 'flex',
        flexDirection: 'column',
    },
    logInfo: {
        height: '30%',
        backgroundColor: '#5A5A5A',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 24,
    },
    cardWrapper: {
        width: '100%',
        flex: 1,
        display: 'flex',
        gap: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'blue',
      },
});

export {
    styles,
};
