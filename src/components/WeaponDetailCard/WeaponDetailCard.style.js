    import { StyleSheet, Dimensions } from "react-native";
    const windowWidth = Dimensions.get("window").width;

    export default StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      },

      backgroundImage: {
        width: windowWidth,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
      },
      contentContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        padding: 20, 
        height: 200,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',

      },
      image: {
        width: '90%', 
        height: 100,   
        borderRadius: 100,
        marginBottom: 10, 
        resizeMode: 'contain',
      },
      name: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
      },
      categoryName: {
        fontSize: 16,
        color: 'white',
      },
      damageRangeContainer: {
        paddingRight: 50,
        paddingLeft: 50,
        paddingBottom: 3,
        paddingTop: 3,
        borderRadius: 10,
      },
      damageRangeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 7,
        marginBottom: 7,
        color: 'white', 
        textAlign: 'center', 
      },
  
      progressContainer:{
        padding: 1,
      },
      progressBarContainer:{
        marginVertical: 5, 
      },
      damageText: {
        textAlign: 'center',
        fontSize: 15,
        color: 'red', 
      },
      skinsContainer: {
        padding: 5,
        borderRadius: 10,
      },
      skinsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white', 
        textAlign: 'center', 
      },
      imageListContainer: {
        marginTop: 3,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      smallImage: {
        width: 100, 
        height: 50, 
        marginRight: 10, 
        borderRadius: 10,
        resizeMode: 'contain', 
      },
      largeImage: {
        width: '100%',
        height: 60, 
        borderRadius: 10,
        resizeMode: 'contain', 
      },
  
      imageWrapper: {
        borderRadius: 10,
        padding: 5,
        marginRight: 3,
      },
      selectedImageWrapper: {
        backgroundColor: "black",
      }, 
      descriptionContainer:{
        marginTop: 5
      }
    });
