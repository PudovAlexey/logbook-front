import { StyleSheet } from 'react-native';

const useStyles = () => {
    return StyleSheet.create({
        layout: {
            flex: 1,
            alignSelf: 'stretch',
            justifyContent: 'center',
            // alignItems: 'center',
        },

        wrapper: {
            backgroundColor: 'red',
            // flex: 1,
        },
    });
};

export {
    useStyles,
};
