import { makeStyles } from '@rneui/themed';

const useStyle = makeStyles(() => ({
    card: {
        width: 150,
    },
    imageWrapper: {
        borderRadius: 12,
        height: 200,
        // width: '100%',
        alignSelf: 'stretch',
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'green',

    },
    image: {
        alignSelf: 'center',
        flex: 1,
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
