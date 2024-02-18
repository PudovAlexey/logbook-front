import { makeStyles } from '@rneui/themed';

const useStyle = makeStyles((theme, props) => ({
    card: {
        width: '45%',
    },
    image: {
        borderRadius: 12,
        height: 200,
        width: '100%',
        backgroundColor: 'green',

    },
    testFont: {
        fontFamily: 'Anta',
        fontWeight: '900',
        fontSize: 20,
    },
    titleBlock: {

    }
}))

export {
    useStyle
}