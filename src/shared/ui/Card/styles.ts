import { makeStyles } from '@rneui/themed';

const useStyle = makeStyles(() => ({
    card: {
        width: 150,
        // height: 300,
    },
    imageWrapper: {
        width: 150,
        height: 250,
        borderRadius: 12,
        alignSelf: 'stretch',
        flex: 1,

    },
    image: {
        width: '100%',
        height: '100%',
        // alignSelf: 'center',
        // flex: 1,
    },

    testFont: {
        fontFamily: 'Anta',
        fontWeight: '900',
        fontSize: 20,
    },
    titleBlock: {

    },
}));

export {
    useStyle,
};
