import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({  
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333333', 
        alignItems: 'center',
        justifyContent: 'center', 
      },
      image: {
        width: '90%', 
        height: windowWidth / 1.2, 
        borderRadius: 8,
      },
      textContainer: {
        marginTop: 20, 
        padding: 14,
        alignItems: 'center',
      },
      name: {
        fontSize: 23,
        color: 'white', 
        fontWeight: 'bold',
        marginBottom: 18, 
      },
      coordinates: {
        fontSize: 12,
        color: 'white', 
      },
});