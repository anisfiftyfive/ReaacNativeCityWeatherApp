import { StyleSheet } from "react-native";

/**
 * All the styles used to create the screen components.
 */
const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'white'
    },
    container: {
      flex: 1,
      padding: 16,
    },
    animBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00000000'
      },
    scrollView: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: 'rgba(39, 189, 245, 0.05)',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 6,
      margin: 5,
    },
    
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    },
    topBar: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#6200EE',
    },
    textButtonContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    textTemperature: {
      fontSize: 70,
      alignItems: 'center',
    },
    textButtonText: {
      color: '#000',
      fontSize: 16,
      fontWeight: 'bold',
    },
    textButton: {
      marginVertical: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#6200EE',
      borderRadius: 4,
    },
    title: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
    },
    searchContainer: {
      marginVertical: 16,
    },
    searchInput: {
      height: 40,
      flex:1,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 4,
    },
    animationContainer: {
      flex: 1,
      marginTop: 30,
      alignItems: 'center',
    },
    text: {
      color: '#000',
      fontFamily: 'sans-serif-light',
      fontSize: 24,
      marginBottom: 10
    },
    textSmall: {
      color: '#000',
      textAlign: 'center',
      fontSize: 14,
    },
    searchRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    searchButton: {
      height: 40,
      backgroundColor: 'rgba(39, 189, 245, 0.20)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      marginLeft: 8,
      borderRadius: 4,
    },
    animation: {
      width: 200,
      height: 200,
    },
    buttonContainer: {
      marginBottom: 20,
    },
    button: {
      marginVertical: 10,
    },
    buttonText: {
      fontSize: 16,
      color: '#000',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)', // Optional background opacity
      },
  });

  export default styles