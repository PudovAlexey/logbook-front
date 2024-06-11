import { StyleSheet } from 'react-native';

const useStyles = () => {
    return StyleSheet.create({

        pageWrapper: {
            position: 'relative',
        },

        scrollView: {
            paddingLeft: 15,
            paddingRight: 15,
        },

        titleWrapper: {
            // textAlign: 'center',
            // width: '100%',
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // flex: 1,
            // display: 'flex',
            // flexDirection: 'row',
            // flex: 1,
        },

        dateWrapper: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            gap: 4,
            paddingLeft: 30,
            paddingRight: 30,
            backgroundColor: 'gray',
            borderRadius: 12,
            paddingTop: 12,
            paddingBottom: 12,
            marginTop: 16,
        },

        mapBox: {
            width: '100%',
            height: 200,
            backgroundColor: 'blue',
            borderRadius: 12,
        },

        buttonSave: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,

        },

        photos: {
            marginBottom: 100,
        },

        photoGalery: {
            width: '100%',
            height: 200,
            // backgroundColor: 'red',
            borderRadius: 12,
            borderWidth: 1,
            borderColor: 'blue',
        },

        text: {
            display: 'flex',
            flexDirection: 'row',
            gap: 4,
            alignItems: 'center',

        },
    });
};

export {
    useStyles,
};
