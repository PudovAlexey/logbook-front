import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor: '#397af8',
      // width: '33%',      // paddingVertical: 15,
      paddingLeft: 15,
      paddingRight: 15,
      flex: 1,
      display: 'flex',
      flexWrap: 'nowrap',
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerItem: {
      flexBasis: 100,
      flexGrow: 1,
    },


    heading: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerRight: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 5,
    },

    loginButton: {
      position: 'relative',
    },

    loginText: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: -100,
    },

    subheaderText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },

    userPlaceholder: {
      backgroundColor: 'purple',
      borderRadius: 50,
    },

    user: {

    },
    });

    export {
        styles,
    };
