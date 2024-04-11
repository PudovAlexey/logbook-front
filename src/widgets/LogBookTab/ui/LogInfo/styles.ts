import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tabWrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
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
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        right: -50,
    },
});

export {
    styles,
};
