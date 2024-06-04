import { StyleSheet } from 'react-native';

const useStyles = () => {
    return StyleSheet.create({
        buttonWrapper: {
            position: 'relative',
            width: '100%',
            height: '100%',
        },
        button: {
            position: 'absolute',
            top: 150,
            right: 10,
        },
        dbgBackground: {
            backgroundColor: '#fff',
        },

        dbgBlock: {
            flex: 1,
            paddingTop: 15,
        },

        error: {
            backgroundColor: 'rgba(252, 3, 11, 0.5)',
        },
        info: {
            backgroundColor: 'rgba(20, 3, 252, 0.5)',
        },
        query: {
            backgroundColor: 'red',
        },
        queryError: {
            backgroundColor: 'rgba(252, 3, 82, 0.5)',
        },
    });
};

export {
    useStyles,
};
