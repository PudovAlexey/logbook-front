import { makeStyles } from '@rneui/themed';

const useStyle = makeStyles(() => ({
    card: {
        width: 150,
        minHeight: 300,
    },
    imageWrapper: {
        borderRadius: 12,
        height: 200,
        alignSelf: 'stretch',
        flex: 1,
        backgroundColor: 'green',

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
