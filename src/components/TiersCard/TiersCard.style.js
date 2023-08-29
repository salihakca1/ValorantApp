import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const cardWidth = (windowWidth - 60) / 3;

export default StyleSheet.create({  
    card: {
      width: cardWidth,
      height: 120,
      marginBottom: 10,
        marginLeft: 5, 
        marginRight: 15, 
        marginTop: 5,
        backgroundColor: 'lightgray', 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    },
    image: {
        width: '70%', 
        height: '70%', 
        borderRadius: 10,
        marginBottom: 15,
        resizeMode: 'contain',

    },
    name: {
        position: 'absolute', 
        bottom: 0,           
        left: 0,            
        right: 0,           
        backgroundColor: 'rgba(169, 169, 169, 0.5)', 
        padding: 2,
        borderRadius:10,
        textAlign: 'center',
        fontSize: 15,
        color: 'white', 
        fontWeight: 'bold',
    },
});