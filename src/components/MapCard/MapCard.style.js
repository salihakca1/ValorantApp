import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const cardWidth = windowWidth - 60;

export default StyleSheet.create({  
    card: {
      width: cardWidth,
      margin: 10,
      backgroundColor: '#333333', 
      borderRadius: 4,
      alignItems: 'center',
      marginLeft: (windowWidth - cardWidth) / 2, 
      
    },
    image: {
      width: '100%', 
      height: 200,    
      borderRadius: 8,
      
    },
    name: {
      position: 'absolute', 
      bottom: 0,           
      left: 0,            
      right: 0,           
      backgroundColor: 'rgba(169, 169, 169, 0.5)', 
      padding: 2,
      textAlign: 'center',
      fontSize: 15,
      color: 'white', 
      fontWeight: 'bold',
    },
});