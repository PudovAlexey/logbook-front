import { StyleSheet } from 'react-native';

const useStyles = () => {
    return StyleSheet.create({
        masterDetailWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flex: 1,
        },

        chatItem: {
            padding: 12,
            borderColor: 'gray',
            borderWidth: 3,
            borderRadius: 12,
            width: '100%',

        },
        // detail: {

        // }
    });
};

export {
    useStyles,
};
