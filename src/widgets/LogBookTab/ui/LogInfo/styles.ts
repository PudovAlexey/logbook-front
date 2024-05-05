import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabWrapper: {
        paddingLeft: 12,
        paddingRight: 12,
        // position: 'relative',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // flex: 1,
    },

    topDivesInfo: {
        position: 'absolute',
        right: 10,
        top: 20,
    },

    mainBox: {
        position: 'relative',
    },

    circleBox: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: -50,
    },
});

export {
    styles,
};
