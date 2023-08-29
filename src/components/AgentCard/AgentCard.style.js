import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({  
    card: {
      width: (windowWidth - 60) / 3,
      marginBottom: 10,
      marginLeft: 5, 
      marginRight: 10, 
      marginTop: 5,
      backgroundColor: '#333333', 
      borderRadius: 4,
      alignItems: 'center',
    },
    image: {
      width: '100%', 
      height: 130,    
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

