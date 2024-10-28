import { StyleSheet } from 'react-native';

function useStyles() {
    return StyleSheet.create({
        wrapper: {
            display: 'flex',
            paddingLeft: 6,
            paddingRight: 6,
            justifyContent: 'space-between',
            flex: 1,
        },
        buttonBlock: {
            // display: 'flex',
            // flexDirection: 'column',
            // flex: 1,
            display: 'flex',
            gap: 6,
        },
        mainBlock: {
            marginTop: 70,
            display: 'flex',
            alignItems: 'center',
            // display: 'flex',
        },

    });
}

export {
    useStyles,
};
